const Contact = ()=>{
    return(
        <div>
            <h1 className="font-bold text-2xl p-4 m-4">Thankyou For contacting us  - Vaibhav Thareja</h1>
            <form>
                <input type="text" placeholder="Enter your name" className="border border-solid border-black rounded-lg px-3 py-1 m-2"/>
                <input type="text" placeholder="Enter your message to us" className="border border-solid border-black rounded-lg px-3 py-1 m-2"/>
                <button className="px-3 py-1 bg-blue-200 rounded-md m-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact;