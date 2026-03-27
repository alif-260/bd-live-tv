# BD Live TV

## Current State
New project, no existing application.

## Requested Changes (Diff)

### Add
- Bangladeshi live TV channel directory with 19 channels
- Channel grid with cards showing channel name and logo
- Clicking a channel opens its YouTube live stream in an embedded iframe
- Channels: Star News, Somoy TV, Ekhon TV, BTV, BTV News, BTV Chottogram, Asian TV, Ekushey TV, Bangla TV, Desh TV, Ananda TV, Nexus Television, S TV, NTV, ATN Bangla, ATN News, Jamuna TV, Independent Television, RTV
- Search/filter functionality
- Bangladesh-themed design (green/red)

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Minimal Motoko backend (no real state needed)
2. Frontend channel directory with grid layout
3. Each card shows channel name + icon
4. Click card to embed YouTube live stream in a modal/side panel
5. YouTube live links using handle format: https://www.youtube.com/@ChannelHandle/live embedded via iframe or opened in new tab
6. Search bar to filter channels
