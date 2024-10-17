import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">
        We'd love to hear from you! Whether you have questions about our AI Agents Platform or want to explore how JpSecureNet.ai can benefit your organization, our team is here to help.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <ul className="space-y-2">
          <li><strong>Email:</strong> info@jpsecurenet.ai</li>
          <li><strong>Phone:</strong> +1 (555) 123-4567</li>
          <li><strong>Address:</strong> 123 AI Boulevard, Tech City, TC 12345</li>
        </ul>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Business Hours:</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;