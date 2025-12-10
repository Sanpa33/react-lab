/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */

export default function Contacto(props){

    const {img, name, phone, email} = props

    console.log(img)

    console.log(props)

    return(
        <div className="contacts">
            <article className="contact-card">
                <img 
                    src={props.img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img 
                        src="src/images/phone-icon.png" 
                        alt="phone icon" 
                    />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="src/images/mail-icon.png" 
                        alt="mail icon"
                    />
                    <p>{props.email}</p>
                </div>
            </article>
        </div>
    )
}