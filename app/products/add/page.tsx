
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* แสดงชื่อหน้าเพจ */}
      <div className="flex justify-center mt-8 mb-8">
        <p className="text-2xl font-bold">Add New Product</p>
      </div>

      {/* แสดงปุ่มกดกลับไปหน้าสินค้าทั้งหมด */}
      <div className="flex justify-end w-[75%] mx-auto mb-8">
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          กลับไปหน้าสินค้าทั้งหมด
        </Link>
      </div>

      {/* แสดงฟอร์มสำหรับเพิ่มสินค้า */}
    </>
  );
}
