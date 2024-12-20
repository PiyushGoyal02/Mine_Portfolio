import React from "react";

function GoogleMap () {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55558.28749921138!2d75.4143028328353!3d29.504902850826262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391165c1e1ec865d%3A0xc00cac08de2874eb!2sFatehabad%2C%20Haryana%20125050%2C%20India!5e0!3m2!1sen!2sus!4v1734683278646!5m2!1sen!2sus"
                width="550"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className="GoogleMap"
            ></iframe>
        </div>
    )
}

export default GoogleMap;