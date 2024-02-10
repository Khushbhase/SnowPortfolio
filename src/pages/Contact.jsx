import React from "react";
import "../styles/Contact.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function Contact() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <div className="fade-in">
        <title>contact | Khush</title>
        <div id="hero_text">
          <h2 className="text_hero_text">Contact</h2>
          <p className="text_hero_text">
            If you have any questions, Reach out to me.
          </p>
        </div>

        <div id="contact_methods">
          <a href="https://discord.com/channels/@me" target="_blank">
            {/* discord card  */}
            <div className="contact_card">
              <iconify-icon
                icon="ri:discord-fill"
                height="2.5rem"
                style={{ paddingLeft: "10px", color: "var(--text-white)" }}
              ></iconify-icon>
              <div className="contact_card_content">
                <h2>Discord</h2>
                <p>@Khush</p>
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/khushal-bhase-a6385b241/" target="_blank">
            {/* linkedin card  */}
            <div className="contact_card">
              <div className="icon_mobile">
                <iconify-icon
                  icon="ri:linkedin-fill"
                  height="2.5rem"
                  style={{ paddingLeft: "10px", color: "var(--text-white)" }}
                  className="icon_mobile"
                ></iconify-icon>
              </div>
              <div className="contact_card_content">
                <h2>LinkedIn</h2>
                <p>@khushalBhase</p>
              </div>
            </div>
          </a>
          <a href="https://github.com/Khushbhase" target="_blank">
            {/* Github card   */}
            <div className="contact_card">
              <iconify-icon
                icon="uil:github"
                height="2.5rem"
                style={{ paddingLeft: "10px", color: "var(--text-white)" }}
              ></iconify-icon>
              <div className="contact_card_content">
                <h2>Github</h2>
                <p>@Khushbhase</p>
              </div>
            </div>
          </a>

          <a href="mailto:bhasekhushal2@gmail.com" target="_blank">
            {/* Mail card   */}
            <div className="contact_card">
              <iconify-icon
                icon="majesticons:mail"
                height="2.5rem"
                style={{ paddingLeft: "10px", color: "var(--text-white)" }}
              ></iconify-icon>
              <div className="contact_card_content">
                <h2>Mail</h2>
                <p>bhasekhushal2@gmai.com</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
