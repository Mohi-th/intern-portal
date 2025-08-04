function Dashboard({ intern }) {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Welcome, {intern.name}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 border rounded shadow-sm bg-blue-50">
          <h2 className="text-lg font-semibold text-gray-700">Referral Code</h2>
          <p className="text-xl mt-2 text-blue-900">{intern.referralCode}</p>
        </div>

        <div className="p-4 border rounded shadow-sm bg-green-50">
          <h2 className="text-lg font-semibold text-gray-700">Total Donations Raised</h2>
          <p className="text-2xl font-bold mt-2 text-green-700">₹{intern.totalRaised || 0}</p>
        </div>
      </div>

      <div className="p-4 border rounded shadow-sm bg-yellow-50">
        <h2 className="text-xl font-bold text-yellow-800 mb-3">🎁 Rewards & Unlockables</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>💡 ₹500 raised – Bronze Badge</li>
          <li>🚀 ₹1000 raised – Silver Badge</li>
          <li>🏆 ₹2000 raised – Gold Badge</li>
          <li>🎉 ₹5000 raised – Exclusive Event Invite</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
