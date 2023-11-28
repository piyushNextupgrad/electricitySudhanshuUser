import style from "@/styles/HelpComponentStyle/comp2.module.css"
const Comp2 = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className={style.comp2}>
                        <h1>We are here to assist you !</h1>
                        <p>Please complete the form below for your complaints</p>
                        <form>
                            <select id="dropdown" name="dropdown" placeholder="Service Type">
                            <option value="option1" >Choose Service</option>
                                <option value="option4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, laudantium?</option>
                                <option value="option2">+92</option>
                                <option value="option3">+93</option>
                            </select>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="First Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="Last Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Email ID" />
                                </div>
                                <div className="col-md-6">
                                    <input type="number" placeholder="Phone No." />
                                </div>
                            </div>
                            <textarea rows="10" cols="50" placeholder="Description"></textarea>
                            <div className={style.bttn}>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Comp2;