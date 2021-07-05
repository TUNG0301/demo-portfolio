import { v4 as uuidv4 } from 'uuid';
import covid from '../img/projects/covid.jpg'
import chatapp from '../img/projects/chatapp.jpg'

const projects =[
    {
        id: uuidv4(),
        name: 'Tracker Covid-19',
        linkGit: "https://github.com/TUNG0301/tracker_Covid-19",
        linkNet: 'https://tracker-covid-19-react.netlify.app',
        img: covid,
        desc: "This app lets you know everything you need to know about the overall coronavirus cases including deaths, recovered, and infected. "
    },
    {
        id: uuidv4(),
        name: 'Chat App',
        linkGit: "https://github.com/TUNG0301/chatapp",
        linkNet: 'https://chat-app-tung-0301.netlify.app',
        img: chatapp,
        desc: "This app lets you communicate with other people. "
    }



]

export default projects;