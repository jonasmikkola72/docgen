import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    surname: '',
    givenNames: '',
    documentNumber: '',
    sex: '',
    dateOfBirth: '',
    dateOfIssue: '',
    dateOfExpiration: '',
    authority: '',
    placeOfBirth: '',
    nationalityCode: '',
    typeOfPermit: '',
    remarksFront: '',
    remarksBack: '',
    canNumber: '',
    alienRegistrationNumber: '',
    resultImageType: '',
    photo: null,
    signature: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming your endpoint is '/api/edit-text-layer'
    fetch('/api/edit-text-layer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  

  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="bg-white p-8 border border-gray-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
  <label htmlFor="surname" className="text-lg font-semibold text-gray-700">Surname</label>
  <input
    type="text"
    name="surname"
    id="surname"
    required
    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    onChange={handleChange}
  />
</div>

<div className="flex flex-col">
  <label htmlFor="givenNames" className="text-lg font-semibold text-gray-700">Given Names</label>
  <input
    type="text"
    name="givenNames"
    id="givenNames"
    required
    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    onChange={handleChange}
  />
</div>

      
      {/* Document Number */}
          <div className="flex flex-col">
            <label htmlFor="documentNumber" className="text-lg font-semibold text-gray-700">Document Number (9 characters)</label>
            <input type="text" name="documentNumber" id="documentNumber" required pattern="\w{9}" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* Sex */}
          <div className="flex flex-col">
            <label htmlFor="sex" className="text-lg font-semibold text-gray-700">Sex (M or F)</label>
            <input type="text" name="sex" id="sex" required pattern="[MF]" maxLength="1" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col">
            <label htmlFor="dateOfBirth" className="text-lg font-semibold text-gray-700">Date of Birth (DD MM YYYY)</label>
            <input type="text" name="dateOfBirth" id="dateOfBirth" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* Date of Issue */}
          <div className="flex flex-col">
            <label htmlFor="dateOfIssue" className="text-lg font-semibold text-gray-700">Date of Issue (DD MM YYYY)</label>
            <input type="text" name="dateOfIssue" id="dateOfIssue" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* Date of Expiration */}
          <div className="flex flex-col">
            <label htmlFor="dateOfExpiration" className="text-lg font-semibold text-gray-700">Date of Expiration (DD MM YYYY)</label>
            <input type="text" name="dateOfExpiration" id="dateOfExpiration" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* Authority */}
          <div className="flex flex-col">
            <label htmlFor="authority" className="text-lg font-semibold text-gray-700">Authority</label>
            <input type="text" name="authority" id="authority" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* Place of Birth */}
          <div className="flex flex-col">
            <label htmlFor="placeOfBirth" className="text-lg font-semibold text-gray-700">Place of Birth</label>
            <input type="text" name="placeOfBirth" id="placeOfBirth" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* Nationality Code */}
          <div className="flex flex-col">
            <label htmlFor="nationalityCode" className="text-lg font-semibold text-gray-700">Nationality Code</label>
            <input type="text" name="nationalityCode" id="nationalityCode" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* Type of Permit */}
          <div className="flex flex-col">
            <label htmlFor="typeOfPermit" className="text-lg font-semibold text-gray-700">Type of Permit</label>
            <input type="text" name="typeOfPermit" id="typeOfPermit" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* Remarks Front Side */}
          <div className="flex flex-col">
            <label htmlFor="remarksFront" className="text-lg font-semibold text-gray-700">Remarks (front side)</label>
            <input type="text" name="remarksFront" id="remarksFront" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* Remarks Back Side */}
          <div className="flex flex-col">
            <label htmlFor="remarksBack" className="text-lg font-semibold text-gray-700">Remarks (back side)</label>
            <input type="text" name="remarksBack" id="remarksBack" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* CAN Number */}
          <div className="flex flex-col">
            <label htmlFor="canNumber" className="text-lg font-semibold text-gray-700">CAN number (not necessary)</label>
            <input type="text" name="canNumber" id="canNumber" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>

          {/* Alien Registration Number */}
          <div className="flex flex-col">
            <label htmlFor="alienRegistrationNumber" className="text-lg font-semibold text-gray-700">Alien Registration Number (ARC) - not necessary</label>
            <input type="text" name="alienRegistrationNumber" id="alienRegistrationNumber" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm
focus:ring-blue-500 focus:border-blue-500" />
</div>

      {/* Result Image Type */}
      <div className="flex flex-col">
        <label htmlFor="resultImageType" className="text-lg font-semibold text-gray-700">Result Image Type (Photo, Scan, Print)</label>
        <select name="resultImageType" id="resultImageType" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
          <option value="Photo">Photo</option>
          <option value="Scan">Scan</option>
          <option value="Print">Print</option>
        </select>
      </div>
       {/* For the file inputs */}
       <div className="flex flex-col">
       <label className="text-lg font-semibold text-gray-700">Photo</label>
       <input type="file" name="photo" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
     </div>

      {/* Signature Upload */}
      <div className="flex flex-col">
      <label htmlFor="signature" className="text-lg font-semibold text-gray-700">Signature</label>
      <input type="file" name="signature" id="signature" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
    </div>

     {/* Generate Button */}
     <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
       Generate
       </button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;