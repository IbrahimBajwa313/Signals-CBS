import { useState } from 'react';

const AdoptionForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'donationAmount':
        setDonationAmount(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, address, donationAmount });
    // Reset form fields
    setName('');
    setPhone('');
    setAddress('');
    setDonationAmount('');
    setSubmitted(true);
  };

  return (
    <div id="form">
      <div className="mb-8 text-center flex flex-col justify-center items-center gap-2">
        <h2 className="text-4xl font-bold text-[#22C55E] ">
          Child Adoption Form
        </h2>
        <p className="text-gray-600 font-light">Fill the form to adopt a Child</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg mx-auto w-[100%]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-300"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-300"
              placeholder="Enter your address"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">How much you can donate for a child monthly</label>
            <input
              type="text"
              name="donationAmount"
              value={donationAmount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-gray-300"
              placeholder="Enter your donation amount"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#22C55E] text-white p-3 rounded-lg hover:bg-[#1da44e] transition"
          >
            Submit
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-600 text-center">
            Submitted successfully. <br /> We will get back to you.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdoptionForm;