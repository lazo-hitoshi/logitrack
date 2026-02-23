# Implementation Plan - Vehicle Master Sync

[Goal Description]
Enable one-way synchronization of Vehicle Master data from the Web App to AppSheet. When a manager registers a new dump truck in the Web App, it should automatically be added to the AppSheet "Vehicle Master" table.

## Proposed Changes

### Logic Layer
#### [MODIFY] [app.js](file:///c:/Users/tiesm/.gemini/antigravity/app.js)
- **New Helper Function**: `sendMasterToAppSheet(truckData)`
    - Accepts truck object.
    - Formats data to match AppSheet columns (`TruckID`, `車両ナンバー`, `会社名`, `ドライバー名`, `積載容量m3`, `車種`).
    - Sends "Add" action to `MASTERS_TABLE_NAME`.
- **Event Listener Update**:
    - In `#add-truck-form` submit handler, call `sendMasterToAppSheet` after updating local state.
    - Add user feedback (console log or alert) upon success/failure (optional/silent for now to avoid blocking UI).

## Verification Plan
### Manual Verification
- Register a new truck via "Dump Truck Master Registration" modal.
- Verify the network request is sent to AppSheet (via browser console logs mock).
- Verify the truck remains in the local list.
