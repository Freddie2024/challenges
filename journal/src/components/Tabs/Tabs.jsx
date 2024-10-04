import './Tabs.css';
import Tab from '../Tab/Tab'

export default function Tabs() {
    return (
        <div className='tabs'>
            <Tab>All Entries</Tab>
            <Tab>Favorites</Tab>
        </div>
    );
}