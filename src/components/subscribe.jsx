import style from "@/styles/homepage.module.css"
import Link from "next/link";
const Subescribe = () => {
    return (
        <section className={style.section8}><div className="container subscribe-box"> 
            <h1>Are You Already Working With Us?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>


            <div className={style.inputWithIcon}>
                <input type="text" placeholder="Enter Your Email" />
                <button aria-hidden="true">SUBSCRIBE</button>
            </div>
            </div>
        </section>
    );
}

export default Subescribe;
