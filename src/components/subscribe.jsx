import style from "@/styles/subscribe.module.css"
import Link from "next/link";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Subescribe = () => {
    return (
        <section className={style.section8}>
            <div>
                <h1>Are You Already Working With Us?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </p>


                <div className={style.inputWithIcon}>
                    {/* <InputGroup className="mb-3 ">
                        <Form.Control
                            placeholder="Enter Your E-mail"
                            aria-label="Enter Your E-mail"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">Submit</InputGroup.Text>
                    </InputGroup> */}
                    <input type="text" placeholder="Enter Your Email" />
                    <button aria-hidden="true"><Link href="#">SUBSCRIBE</Link></button>
                </div>
            </div>

        </section>
    );
}

export default Subescribe;