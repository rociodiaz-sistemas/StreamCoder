# Streamcoder
![White Minimalist Elegant Handwritten LinkedIn Banner (1128 x 191 px)](https://github.com/rociodiaz-sistemas/StreamCoder/assets/68517616/757b232d-c32b-4996-ac00-ee4afdda3421)

## Overview
Streamcoder is a Widget Library and CRM project built using React and TypeScript. It is designed to seamlessly integrate with OBS (Open Broadcaster Software) and connect to Twitch as well as various other streaming platforms. The project aims to provide a highly customizable chat widget experience and will soon expand to include other customizable widgets.
Our working chat widget is highly advanced, featuring custom animations and interactive elements designed to engage viewers in real-time. It includes special animations for Bits messages, dynamic gradients, and animated backgrounds. Additionally, there are unique animations to celebrate new followers, creating a lively and engaging stream experience.

## Key Features
- **Chat Widget Integration**: Easily embed the chat widget into OBS for a smooth streaming experience.
- **Platform Connectivity**: Connects to Twitch and other platforms, offering broad compatibility.
- **Customization**: Upcoming features will allow for extensive customization of widgets to suit your streaming needs.

## Technologies Used
- **React & TypeScript**: For building robust and maintainable user interfaces.
- **Websockets**: Ensuring real-time data transmission for chat functionality.
- **StreamerBot**: Acts as a proxy to facilitate communication between various platforms and the widget.
- **Redux Toolkit & Saga**: For managing complex state logic and handling asynchronous operations efficiently.
- **Chakra UI**: A modular and accessible component library for building interfaces quickly.
- **Framer Motion**: Adds delightful animations and interactions to enhance user experience.
- **Storybook**: Testing animations and components.
- **Tailwind**: Works very well with Framer Motion.

## Getting Started
### Prerequisites
Ensure you have the following installed on your development machine:
- Node.js (>=14.x)
- npm or yarn

### Installation
1. Clone the repository

2. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the Project
To start the development server, run:
```bash
npm run dev
```
### Running Storybook
npm run storybook

### Highlights
Prototype design. This is a chat widget meant for streaming purposes, the design I chose in the CRM is cartoony. There are other themes able to be personalized for other flavors. The prototype is bound to change. 
![image](https://github.com/rociodiaz-sistemas/StreamCoder/assets/68517616/6f74e494-24fb-4f99-955c-9495743d17a0)

Features: 
- Background overlays with real-time gradient changes with Chroma.js
- Animations with Framer Motion such as a highlighter animation for highlighted messages from Twitch

https://github.com/rociodiaz-sistemas/StreamCoder/assets/68517616/21674c16-9379-4151-8863-00c0d234f15a

- UFO animation 

https://github.com/rociodiaz-sistemas/StreamCoder/assets/68517616/e150664a-a726-4fc0-a97a-3b5fbf57e2a4

- Shifting Gradient Background using Chroma.JS and Framer Motion
- Moon and Sun Animation shifting every minute in real time in an elipsis.
- Four selectable Themes using Chakra UI. Aditionally, a project-scoped Chakra UI and Storybook Plugin for handling multiple themes.
- Storybook aligned with brand.

https://github.com/rociodiaz-sistemas/StreamCoder/assets/68517616/5f8405c3-3d7a-4d68-bc38-2b1c3ec8783b

- Using Notion for extensive documentation, with over 20 pages of code related documentation, tutorials and project architecture.
- Responsive and resizable from within OBS, using react-resizable

https://github.com/rociodiaz-sistemas/StreamCoder/assets/68517616/2b4b2ddc-5dd1-475d-a275-97e45caaac31



