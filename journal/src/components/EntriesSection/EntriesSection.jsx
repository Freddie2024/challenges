import './EntriesSection.css';
import Tabs from '../Tabs/Tabs';
import Entry from '../Entry/Entry';

export default function EntriesSection() {
    return (
        <section className='section'>
           <Tabs />
            <ul>
                <Entry>I</Entry>
                <Entry>Icon-Button</Entry>
                <Entry>Icon-Button</Entry>
            </ul>
        </section>
    );
}