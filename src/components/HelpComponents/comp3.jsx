import style from "@/styles/HelpComponentStyle/comp3.module.css"
import Image from "next/image";
const Comp3 = () => {
    return (
        <>
            <div className={style.comp3}>
                <div className="row">
                    <div className="col-md-3 text-center">
                        <Image src="/ac_service/Layer_50.png" height={100} width={100} alt="img" />
                    </div>
                    <div className={`${style.text} col-md-9`}>
                        <h1>Foam & Power jet AC Service (Split)</h1>
                        <div className={style.text_div1}>
                            <span>$599</span>
                            <span>45 mins</span>
                        </div>
                        <div className={style.text_div2}>
                            <div>
                                <label>Quantity</label>{" "}
                                <select id="dropdown" name="dropdown">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div>
                                <label>Date</label>{" "}
                                <input type="datetime-local" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 text-center">
                        <Image src="/ac_service/Layer_50.png" height={100} width={100} alt="img" />
                    </div>
                    <div className={`${style.text} col-md-9`}>
                        <h1>Foam & Power jet AC Service (Split)</h1>
                        <div className={style.text_div1}>
                            <span>$599</span>
                            <span>45 mins</span>
                        </div>
                        <div className={style.text_div2}>
                            <div>
                                <label>Quantity</label>{" "}
                                <select id="dropdown" name="dropdown">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div>
                                <label>Date</label>{" "}
                                <input type="datetime-local" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 text-center">
                        <Image src="/ac_service/Layer_50.png" height={100} width={100} alt="img" />
                    </div>
                    <div className={`${style.text} col-md-9`}>
                        <h1>Foam & Power jet AC Service (Split)</h1>
                        <div className={style.text_div1}>
                            <span>$599</span>
                            <span>45 mins</span>
                        </div>
                        <div className={style.text_div2}>
                            <div>
                                <label>Quantity</label>{" "}
                                <select id="dropdown" name="dropdown">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div>
                                <label>Date</label>{" "}
                                <input type="datetime-local" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 text-center  ">
                        <Image src="/ac_service/Layer_50.png" height={100} width={100} alt="img" />
                    </div>
                    <div className={`${style.text} col-md-9`}>
                        <h1>Foam & Power jet AC Service (Split)</h1>
                        <div className={style.text_div1}>
                            <span>$599</span>
                            <span>45 mins</span>
                        </div>
                        <div className={style.text_div2}>
                            <div>
                                <label>Quantity</label>{" "}
                                <select id="dropdown" name="dropdown">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div>
                                <label>Date</label>{" "}
                                <input type="datetime-local" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comp3;