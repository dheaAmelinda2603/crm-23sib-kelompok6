import React from 'react';

const ListPemesananTreatment = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-lg font-bold text-purple-700 mb-4">Daftar Pemesanan Treatment</h2>

      {data.length === 0 ? (
        <p className="text-gray-500 italic">Belum ada pemesanan yang masuk.</p>
      ) : (
        <table className="w-full text-sm border border-gray-200">
          <thead className="bg-purple-100">
            <tr>
              <th className="p-2 border">No</th>
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Treatment</th>
              <th className="p-2 border">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-2 border text-center">{index + 1}</td>
                <td className="p-2 border">{item.nama}</td>
                <td className="p-2 border">{item.treatment}</td>
                <td className="p-2 border">{item.tanggal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListPemesananTreatment;
