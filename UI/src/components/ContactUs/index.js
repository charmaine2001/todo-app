import TodoNavBar from '../TodoNavBar';

function ContactUs() {
    
    return (
        <div className="h-screen w-full flex flex-col p-4 bg-gray-100">
            <TodoNavBar />
           <ContactUs/>
        </div>
    );
}

export default ContactUs;