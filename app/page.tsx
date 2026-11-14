"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type Product = {
  id: number;
  proName: string;
  proPrice: number;
  proQuantity: number;
  proDescription: string;
};

export default function Page() {

  const [products, setProducts] = useState<Product[]>([]);
  
  // สร้าง start ใช้สำหรับการโหลดข้อมูลจาก API
  const [loading, setLoading] = useState<boolean>(true);

  // ดึงข้อมูลสิน้คาจาก API เผ่าน useEffect 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {/* แสดงชื่อหน้าเพจ */}
      <div className="flex justify-center mt-8 mb-8">
        <p className="text-2xl font-bold">Show All Product</p>
      </div>

      {/* แสดงปุ่มเปิดไปหน้าเพิ่มสินค้า */}
      <div className="flex justify-end mr-15 mb-8">
        <Link
          href="/products/add"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          เพิ่มสินค้า
        </Link>
      </div>

      {/* แสดงรายการสินค้าในรูปแบบตาราง
          โดยแต่ละรายการจะมีลิงก์ไปหน้าแก้ไขสินค้า
          และปุ่มลบสินค้า */}
          <div className="flex justify-center w-[75%]">
            <table className="border-collapse border border-gray-400">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2">ชื่อสินค้า</th>
                  <th className="border border-gray-400 px-4 py-2">ราคา</th>
                  <th className="border border-gray-400 px-4 py-2">จำนวน</th>
                  <th className="border border-gray-400 px-4 py-2">รายละเอียด</th>
                  <th className="border border-gray-400 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="border border-gray-400 px-4 py-2">{product.proName}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.proPrice}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.proQuantity}</td>
                    <td className="border border-gray-400 px-4 py-2">{product.proDescription}</td>
                    <td className="border border-gray-400 px-4 py-2">
                      <Link
                        href={`/products/edit/${product.id}`}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded mr-2"
                      >
                        แก้ไข
                      </Link>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded cursor-pointer"
                      >
                        ลบ
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </>
  );
}