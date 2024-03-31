import { useEffect, useState } from "react";
import axios from "axios";

const useFetchInterval = (url) => {
  const [data, setData] = useState([]); // Inisialisasi data dengan array kosong
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        // Pastikan response.data adalah array objek dengan properti CO dan createdAt
        if (
          Array.isArray(response.data) &&
          response.data.length > 0 &&
          "CO" in response.data[0] &&
          "createdAt" in response.data[0]
        ) {
          setData(response.data);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData(); // Panggil fetchData pertama kali saat komponen dimount

    // Atur interval untuk melakukan fetch setiap 15 menit
    const interval = setInterval(() => {
      fetchData();
    }, 5 * 60 * 1000); // 15 menit dalam milidetik

    // Membersihkan interval saat komponen unmount atau url berubah
    return () => clearInterval(interval);
  }, [url]); // Jalankan useEffect kembali jika url berubah

  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      // Pastikan response.data adalah array objek dengan properti CO dan createdAt
      if (
        Array.isArray(response.data) &&
        response.data.length > 0 &&
        "CO" in response.data[0] &&
        "createdAt" in response.data[0]
      ) {
        setData(response.data);
      } else {
        throw new Error("Invalid data format");
      }
    } catch (eror) {
      setError(eror);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetchInterval;
