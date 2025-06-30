import { useEffect, useState } from "react";
import * as apiService from "../services/api";

type Record = apiService.Record;
const getRecords = apiService.getRecords;

const DataPage: React.FC = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecords = () => {
    getRecords()
      .then((res) => {
        setRecords(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao carregar os dados");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRecords();

    const interval = setInterval(fetchRecords, 5000);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <p className="p-4 text-center">Carregando dados...</p>;
  if (error) return <p className="p-4 text-center text-red-600">{error}</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Últimas leituras RFID</h2>
      {records.length === 0 ? (
        <p>Nenhuma leitura registrada.</p>
      ) : (
        <table className="min-w-full bg-white rounded shadow-md overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Tag RFID</th>
              <th className="py-2 px-4 text-left">Data e Hora</th>
            </tr>
          </thead>
          <tbody>
            {records.map(({ id, hash, date }) => (
              <tr key={id} className="border-t">
                <td className="py-2 px-4 font-mono break-all">{hash}</td>
                <td className="py-2 px-4">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataPage;
