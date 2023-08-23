import styled from 'styled-components'

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;

          input[type='submit'] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `

  return (
    <Wrapper>
      <h2 className="common-heading"> Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7318.745099919632!2d72.85217464341095!3d19.25624616967355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1028ffb5f05%3A0xd1787edba3d58fd4!2sDMart!5e0!3m2!1sen!2sin!4v1692422605002!5m2!1sen!2sin"
        width="80%"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mdorgobp"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="Username"
              required
              autoComplete="off"
              placeholder="Enter your Username"
            />
            <input
              type="email"
              name="Email"
              required
              autoComplete="off"
              placeholder="Enter your Email"
            />
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message"
              required
              autoComplete="off"
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact
