# Migration Task List

- [ ] Analyze current implementation
    - [ ] Locate "Each Port Info" button and modal/section in `index.html`
    - [ ] Locate "New Lot Addition" button and modal/section in `index.html`
    - [ ] Identify event listeners and logic in `app.js`
- [ ] Create Implementation Plan
    - [ ] Design how to merge the functionalities
    - [ ] Plan removal of the old button
- [ ] Execute Migration
    - [ ] update `index.html` to remove "Each Port Info" button
    - [ ] update `app.js` / `index.html` to move the content/functionality to "New Lot Addition" modal
- [ ] Verify
    - [x] Check if "Each Port Info" is gone
    - [x] Check if "New Lot Addition" now includes the port info functionality

- [x] Redesign Input Layout
    - [x] Create 2-column grid layout for the modal
    - [x] Group related fields (Vehicle Info vs Trip Info)
    - [x] Optimize "Map Settings" section placement
