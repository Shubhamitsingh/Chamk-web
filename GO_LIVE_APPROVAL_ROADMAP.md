# Go Live Approval Feature - Implementation Roadmap

## 📋 Overview
This roadmap outlines how to implement an approval-based "Go Live" feature where only admin-approved users can access the live streaming functionality.

---

## 🎯 Current State
- ✅ Admin panel exists with approval menu
- ✅ Users can currently click "+" button to go live (no restrictions)
- ❌ Need to add approval check before allowing users to go live

---

## 🗺️ Implementation Roadmap

### **Phase 1: Database Schema Updates**

#### 1.1 User Table Modification
Add a new field to track approval status:

```sql
-- Add column to users table
ALTER TABLE users ADD COLUMN is_approved_for_live BOOLEAN DEFAULT FALSE;
ALTER TABLE users ADD COLUMN approved_at TIMESTAMP NULL;
ALTER TABLE users ADD COLUMN approved_by INT NULL; -- Admin user ID
ALTER TABLE users ADD COLUMN approval_requested_at TIMESTAMP NULL;
```

**Fields:**
- `is_approved_for_live`: Boolean flag (true = approved, false = not approved)
- `approved_at`: Timestamp when admin approved
- `approved_by`: Admin user ID who approved
- `approval_requested_at`: When user requested approval (optional)

---

### **Phase 2: Backend API Endpoints**

#### 2.1 Check User Approval Status
**Endpoint:** `GET /api/user/check-live-permission`
**Purpose:** Check if current user is approved to go live

**Request:**
```json
Headers: {
  "Authorization": "Bearer <token>"
}
```

**Response (Approved):**
```json
{
  "success": true,
  "isApproved": true,
  "message": "User is approved to go live"
}
```

**Response (Not Approved):**
```json
{
  "success": true,
  "isApproved": false,
  "message": "Your account is pending approval. Please wait for admin approval."
}
```

#### 2.2 Admin Approval Endpoint (Already Exists - Verify)
**Endpoint:** `POST /api/admin/approve-user/:userId`
**Purpose:** Admin approves user for live streaming

**Request:**
```json
{
  "userId": 123,
  "approved": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "User approved successfully",
  "user": {
    "id": 123,
    "is_approved_for_live": true,
    "approved_at": "2024-01-15T10:30:00Z"
  }
}
```

#### 2.3 Get User Approval Status (For Admin Panel)
**Endpoint:** `GET /api/admin/users/:userId/approval-status`
**Purpose:** Get approval status for admin panel display

**Response:**
```json
{
  "userId": 123,
  "username": "user123",
  "is_approved_for_live": false,
  "approval_requested_at": "2024-01-10T08:00:00Z",
  "approved_at": null,
  "approved_by": null
}
```

---

### **Phase 3: Mobile App Changes**

#### 3.1 Home Screen - "+" Button Click Handler

**Location:** Home Screen Component (where "+" button is located)

**Current Flow:**
```
User clicks "+" → Directly opens Go Live screen
```

**New Flow:**
```
User clicks "+" → Check approval status → 
  ├─ If Approved → Open Go Live screen
  └─ If Not Approved → Show "Not Permission" message/alert
```

**Implementation Steps:**

1. **Add API Service Method:**
```javascript
// services/apiService.js or similar
export const checkLivePermission = async () => {
  try {
    const response = await fetch('/api/user/check-live-permission', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${getAuthToken()}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error checking live permission:', error);
    return { success: false, isApproved: false };
  }
};
```

2. **Update "+" Button Click Handler:**
```javascript
// HomeScreen.jsx or similar
const handleGoLiveClick = async () => {
  // Show loading indicator
  setLoading(true);
  
  try {
    // Check approval status
    const permissionCheck = await checkLivePermission();
    
    if (permissionCheck.isApproved) {
      // User is approved - proceed to go live
      navigation.navigate('GoLiveScreen');
    } else {
      // User not approved - show error message
      showPermissionDeniedAlert(permissionCheck.message);
    }
  } catch (error) {
    showErrorAlert('Failed to check permission. Please try again.');
  } finally {
    setLoading(false);
  }
};
```

3. **Add Permission Denied Alert/Modal:**
```javascript
const showPermissionDeniedAlert = (message) => {
  Alert.alert(
    'Permission Denied',
    message || 'Your account is pending approval. Please wait for admin approval to go live.',
    [
      {
        text: 'OK',
        style: 'default'
      },
      {
        text: 'Contact Support',
        onPress: () => {
          // Navigate to support/contact screen
          navigation.navigate('Contact');
        }
      }
    ]
  );
};
```

#### 3.2 Optional: Visual Indicator on Home Screen

**Option A: Disable "+" Button for Non-Approved Users**
```javascript
// Check approval status on component mount
useEffect(() => {
  checkUserApprovalStatus();
}, []);

const [isApproved, setIsApproved] = useState(false);

// In render:
<Button
  onPress={handleGoLiveClick}
  disabled={!isApproved}
  style={!isApproved && styles.disabledButton}
>
  <Text>+</Text>
</Button>
```

**Option B: Show Badge/Indicator**
```javascript
{!isApproved && (
  <View style={styles.pendingBadge}>
    <Text>Pending Approval</Text>
  </View>
)}
```

---

### **Phase 4: Admin Panel Integration**

#### 4.1 Update Admin Approval UI

**Location:** Admin Panel - User Approval Section

**Current State:**
- Admin can see list of users
- Admin can approve users (general approval)

**Required Updates:**

1. **Add "Live Streaming Approval" Column/Status:**
```javascript
// AdminUserList.jsx or similar
const columns = [
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'is_approved_for_live', label: 'Live Approved', type: 'boolean' },
  { key: 'approved_at', label: 'Approved Date' },
  { key: 'actions', label: 'Actions' }
];
```

2. **Add Approval Toggle/Action:**
```javascript
const handleToggleLiveApproval = async (userId, currentStatus) => {
  try {
    const response = await fetch(`/api/admin/approve-user/${userId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${adminToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        approved: !currentStatus
      })
    });
    
    const data = await response.json();
    if (data.success) {
      // Update UI
      refreshUserList();
      showSuccessMessage('User approval status updated');
    }
  } catch (error) {
    showErrorMessage('Failed to update approval status');
  }
};
```

3. **Add Filter/Search for Approval Status:**
```javascript
// Filter options
const filters = [
  { label: 'All Users', value: 'all' },
  { label: 'Approved for Live', value: 'approved' },
  { label: 'Pending Approval', value: 'pending' }
];
```

#### 4.2 Bulk Approval Actions (Optional)
```javascript
// Allow admin to approve multiple users at once
const handleBulkApprove = async (userIds) => {
  // API call to approve multiple users
};
```

---

### **Phase 5: User Experience Enhancements**

#### 5.1 Pending Approval Screen (Optional)
Create a dedicated screen shown when user is not approved:

```javascript
// PendingApprovalScreen.jsx
const PendingApprovalScreen = () => {
  return (
    <View style={styles.container}>
      <Icon name="clock" size={64} />
      <Text style={styles.title}>Pending Approval</Text>
      <Text style={styles.message}>
        Your account is pending admin approval to go live.
        You will be notified once approved.
      </Text>
      <Button onPress={() => navigation.goBack()}>
        Go Back
      </Button>
    </View>
  );
};
```

#### 5.2 Push Notification (Optional)
Send push notification when user is approved:

```javascript
// Backend: When admin approves user
if (user.isApproved) {
  sendPushNotification(user.deviceToken, {
    title: 'You\'re Approved!',
    body: 'You can now go live on Chamakz!',
    data: { type: 'live_approved' }
  });
}
```

---

### **Phase 6: Testing Checklist**

#### 6.1 Backend Testing
- [ ] Test approval status check API endpoint
- [ ] Test admin approval API endpoint
- [ ] Test with invalid user tokens
- [ ] Test with non-existent users
- [ ] Verify database updates correctly

#### 6.2 Mobile App Testing
- [ ] Test "+" button click for approved user (should work)
- [ ] Test "+" button click for non-approved user (should show error)
- [ ] Test with network errors
- [ ] Test with expired tokens
- [ ] Test UI states (loading, error, success)

#### 6.3 Admin Panel Testing
- [ ] Test approval toggle functionality
- [ ] Test user list filtering
- [ ] Test bulk approval (if implemented)
- [ ] Verify approval status updates in real-time

#### 6.4 Integration Testing
- [ ] End-to-end: Admin approves user → User can go live
- [ ] End-to-end: Admin revokes approval → User cannot go live
- [ ] Test concurrent approvals
- [ ] Test with multiple users

---

## 🔄 Data Flow Diagram

```
┌─────────────┐
│   Mobile    │
│     App     │
└──────┬──────┘
       │
       │ User clicks "+"
       │
       ▼
┌─────────────────────┐
│ Check Approval API  │
│ GET /api/user/      │
│ check-live-permission│
└──────┬──────────────┘
       │
       ├─ Approved? ──YES──► Open Go Live Screen
       │
       └─ Not Approved ──NO──► Show "Not Permission" Alert
       
       
┌─────────────┐
│   Admin     │
│   Panel     │
└──────┬──────┘
       │
       │ Admin clicks "Approve"
       │
       ▼
┌─────────────────────┐
│ Approve User API    │
│ POST /api/admin/    │
│ approve-user/:id    │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ Update Database     │
│ is_approved_for_live│
│ = true              │
└─────────────────────┘
```

---

## 📝 Implementation Priority

### **High Priority (Must Have):**
1. ✅ Database schema update
2. ✅ Backend API: Check approval status
3. ✅ Mobile app: "+" button permission check
4. ✅ Admin panel: Approval toggle

### **Medium Priority (Should Have):**
5. ⚠️ User-friendly error messages
6. ⚠️ Admin panel: Filter by approval status
7. ⚠️ Loading states in mobile app

### **Low Priority (Nice to Have):**
8. 💡 Push notifications on approval
9. 💡 Pending approval screen
10. 💡 Bulk approval actions
11. 💡 Approval request timestamp

---

## 🚀 Quick Start Implementation Steps

### Step 1: Database (5 minutes)
```sql
ALTER TABLE users ADD COLUMN is_approved_for_live BOOLEAN DEFAULT FALSE;
```

### Step 2: Backend API (30 minutes)
- Create `GET /api/user/check-live-permission` endpoint
- Verify `POST /api/admin/approve-user/:id` updates `is_approved_for_live`

### Step 3: Mobile App (1 hour)
- Add `checkLivePermission()` function
- Update "+" button click handler
- Add permission denied alert

### Step 4: Admin Panel (30 minutes)
- Add approval status column
- Add approval toggle button
- Test approval flow

### Step 5: Testing (30 minutes)
- Test approved user flow
- Test non-approved user flow
- Test admin approval

**Total Estimated Time: ~2.5 hours**

---

## 🔐 Security Considerations

1. **Authentication Required:**
   - All API endpoints must verify user authentication
   - Admin endpoints must verify admin role

2. **Authorization:**
   - Only admins can approve users
   - Users can only check their own approval status

3. **Rate Limiting:**
   - Limit approval status check requests
   - Prevent abuse of approval endpoints

4. **Data Validation:**
   - Validate user IDs in API requests
   - Sanitize all inputs

---

## 📱 Mobile App Code Example (React Native)

```javascript
// HomeScreen.jsx
import React, { useState, useEffect } from 'react';
import { View, Button, Alert, ActivityIndicator } from 'react-native';
import { checkLivePermission } from '../services/apiService';

const HomeScreen = ({ navigation }) => {
  const [isApproved, setIsApproved] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGoLiveClick = async () => {
    setLoading(true);
    
    try {
      const result = await checkLivePermission();
      
      if (result.isApproved) {
        // Approved - navigate to go live
        navigation.navigate('GoLive');
      } else {
        // Not approved - show alert
        Alert.alert(
          'Permission Denied',
          result.message || 'Your account is pending approval. Please wait for admin approval.',
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to check permission. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Button
        title="+"
        onPress={handleGoLiveClick}
        disabled={loading}
      />
      {loading && <ActivityIndicator />}
    </View>
  );
};
```

---

## ✅ Success Criteria

The feature is complete when:
1. ✅ Non-approved users see "Not Permission" when clicking "+"
2. ✅ Approved users can go live normally
3. ✅ Admin can approve/revoke approval from admin panel
4. ✅ Approval status persists in database
5. ✅ All edge cases handled (network errors, invalid tokens, etc.)

---

## 📞 Support & Questions

If you need help implementing any part of this roadmap:
1. Review the code examples above
2. Check your existing admin panel code for similar patterns
3. Test each phase before moving to the next

---

**Last Updated:** 2024
**Status:** Ready for Implementation

