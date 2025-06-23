// src/pages/Home.js
import { Link } from 'react-router-dom';

export default function Home() {
  return (
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section 
      className="text-center mb-16 relative min-h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/images/Grönska.jpg)`
      }}
    >
      <div className="relative z-10 text-white max-w-2xl px-4">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-md">Du är inte ensam</h1>
        <p className="text-lg mb-8 drop-shadow-md">Vi hjälper dig genom din resa med gallgångscancer.</p>
        <button 
          className="text-white px-6 py-3 rounded-lg font-medium transition-colors"
          style={{ 
            backgroundColor: '#22401e',
            ':hover': { backgroundColor: '#1a301a' }
          }}
        >
          Läs mer
        </button>
      </div>
    </section>

          <hr className="my-12 border-gray-200" />

          <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* WhatIs Card */}
            <Link to="/WhatIs" className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:bg-gray-50 transition-all group">
              <div className="space-y-4">
                {/* Image container */}
          <div className="mb-4 w-full flex justify-start">  {/* Changed to justify-start */}
            <img 
              src="/images/4.jpg" 
              alt="Diagnosis icon"
              className="w-[50px] h-[50px] object-cover rounded-lg mr-4"
            />
          </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">Vad är gallgångscancer?</h2>
                <p className="text-gray-600">Kort förklaring av sjukdomen och var den sitter i kroppen.</p>
              </div>
            </Link>

      {/* Diagnosis Card */}
        <Link to="/AfterDiagnosis"  className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:bg-gray-50 transition-all min-h-[280px] h-full">
      <div className="space-y-4 h-full flex flex-col justify-between">
        <div>
          {/* Image container */}
          <div className="mb-4 w-full flex justify-start">  {/* Changed to justify-start */}
            <img 
              src="/images/3.jpg" 
              alt="Diagnosis icon"
              className="w-[50px] h-[50px] object-cover rounded-lg mr-4"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Så ställs diagnosen</h2>
          <p className="text-gray-600">Ultraljud, röntgen, MR, biopsi – hur vården utreder.</p>
        </div>
      </div>
    </Link>

            {/* AffterDiagnosis Card */}
            <Link to="/AfterDiagnosis" className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:bg-gray-50 transition-all group">
              <div className="space-y-4">
                {/* Image container */}
          <div className="mb-4 w-full flex justify-start">  {/* Changed to justify-start */}
            <img 
              src="/images/2.jpg" 
              alt="Diagnosis icon"
              className="w-[50px] h-[50px] object-cover rounded-lg mr-4"
            />
          </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">Vad händer efter diagnosen?</h2>
                <p className="text-gray-600">En checklista för att känna sig mer förberedd.</p>
              </div>
            </Link>
          </div>

          {/* ... Rest of your content ... */}
        </div>

          {/* Testimonial Section */}
    <section className="bg-gray-50 p-8 rounded-xl mb-16 flex items-stretch gap-6 min-h-[400px] border-2 h-full border-red-500">
  {/* Image container */}
  <div className="flex-shrink-0 p-[10px] bg-white rounded-lg border-4 border-white shadow-md h-full border-2 border-blue-500">
    <img 
      src="/images/Gabbe.jpg" 
      alt="Gabriel"
      className="w-[200px] h-full rounded-lg object-cover"
    />
  </div>

  {/* Text container */}
  <div className="flex-1 bg-[#f9eae7] p-6 rounded-lg shadow-sm min-w-[300px] flex flex-col justify-between border-2 border-green-500 h-full">
    <blockquote className="text-xl italic text-gray-700 mb-4">
      ”Från första besöket fick jag stöd och hopp.”
    </blockquote>
    <p className="font-medium text-gray-900 mt-auto">- Gabriel</p>
  </div>
</section>

              <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Diagnosis Card */}
        <Link to="/AfterDiagnosis"  className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:bg-gray-50 transition-all min-h-[280px] h-full">
      <div className="space-y-4 h-full flex flex-col justify-between">
        <div>
          {/* Image container */}
          <div className="mb-4 w-full flex justify-start">  {/* Changed to justify-start */}
            <img 
              src="/images/4.jpg" 
              alt="Diagnosis icon"
              className="w-[50px] h-[50px] object-cover rounded-lg mr-4"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Behandlingar</h2>
          <p className="text-gray-600">Finna fler alternativ och nya behandlingar</p>
        </div>
      </div>
    </Link>

            {/* Treatments Card */}
            <Link to="/treatment" className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:bg-gray-50 transition-all group">
              <div className="space-y-4">
                {/* Image container */}
          <div className="mb-4 w-full flex justify-start">  {/* Changed to justify-start */}
            <img 
              src="/images/4.jpg" 
              alt="Diagnosis icon"
              className="w-[50px] h-[50px] object-cover rounded-lg mr-4"
            />
          </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">Att leva med gallgångscancer</h2>
                <p className="text-gray-600">Kost, trötthet, känslor, vardag, stöd från andra.</p>
              </div>
            </Link>

            {/* Support Card */}
            <Link to="/SupportAndContacts" className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:bg-gray-50 transition-all group">
              <div className="space-y-4">
                {/* Image container */}
          <div className="mb-4 w-full flex justify-start">  {/* Changed to justify-start */}
            <img 
              src="/images/4.jpg" 
              alt="Diagnosis icon"
              className="w-[50px] h-[50px] object-cover rounded-lg mr-4"
            />
          </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">Stöd och kontakt</h2>
                <p className="text-gray-600">Få hjälp och stöd under resan</p>
              </div>
            </Link>
          </div>

          {/* ... Rest of your content ... */}
        </div>

          {/* Donation Section */}
          <section 
      className="p-8 rounded-xl text-center"
      style={{ 
        backgroundColor: '#fcf8ec',
        color: '#1a1a1a' // Ensure proper contrast
      }}
    >
      <h2 className="text-2xl font-bold mb-4">Ge en gåva</h2>
      <p className="mb-6">Din gåva stärker vår forskning om gallgångscancer.</p>
      <Link 
      to="/Gifts"
      className="text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
      style={{ 
        backgroundColor: '#22401e',
        ':hover': { backgroundColor: '#1a301a' }
      }}
    >
      Läs mer
    </Link>
    </section>
        </div>
  );
}