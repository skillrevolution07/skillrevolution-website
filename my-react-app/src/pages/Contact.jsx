import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzJsyj6M8co7HexPQ-wn1r_9bdS3oW92sOV_tcGQgLrytzTOcN3YZESKo_adQUhNAA/exec";

  try {
    await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(formData),
    });

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    console.error("Error!", error);
    alert("Something went wrong");
  }

  setLoading(false);
};

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h1>

          <p className="text-gray-600 mt-3">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">
              Send a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-purple-700 text-xl mt-1" />

                <div>
                  <h3 className="font-semibold">
                    Address
                  </h3>

                  <p className="text-gray-600">
                    Skill Revolution,
                    <br />
                    1st Floor, Ramakrshina Nivas,
                    Flat #103 (beside Vyjayanthi Hospitals,
                    SR Nagar), Hyderabad,
                    Telangana, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-purple-700 text-xl mt-1" />

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +91 7337280838
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-purple-700 text-xl mt-1" />

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    info@sredu.tech
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map */}
            <div className="mt-8">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.313771544078!2d78.4394775742062!3d17.442668083453988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb917fa8c4d855%3A0xe493aa6f759e0cac!2sSkill%20Revolution!5e1!3m2!1sen!2sin!4v1780930300898!5m2!1sen!2sin"
                className="w-full h-64 rounded-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}