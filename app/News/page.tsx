 'use client'

const News = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <img 
                alt="Aerial view of industrial buildings" 
                className="w-full h-auto" 
                height="400" 
                src="https://storage.googleapis.com/a1aa/image/SiYXjs067op0DZ9AYVajJQ8cTpoHfgRjZflKVmG8tG42wbxTA.jpg" 
                width="800" 
              />
            </div>
            <div className="md:col-span-1 bg-white p-4">
              <h2 className="text-xl font-bold mb-2">
                Chiến thắng của Trump có thể trợ lực cho bất động sản công nghiệp Việt Nam
              </h2>
              <p className="text-gray-700 mb-4">
                Bất động sản công nghiệp có thêm cơ hội nhờ xu hướng chuyển dịch chuỗi cung ứng đến Việt Nam được củng cố khi ông Trump làm tổng thống.
              </p>
              <p className="text-gray-500">

Theo viện này, thời gian qua vẫn ghi nhận nhiều phản ánh, khiếu nại từ người dân về bất nhất trong cách tính nghĩa vụ tài chính của cơ quan thuế. Nhiều Chi cục thuế trên địa bàn thành phố đã tính tiền sử dụng đất cho người dân theo bảng giá điều chỉnh mới (Quyết định 79/2024) dù thời gian nộp hồ sơ là trước 31/10 (thời điểm bảng giá mới chưa có hiệu lực). Điều này dẫn đến nhiều hồ sơ bị đội tiền sử dụng đất lên quá cao so với cách tính của bảng giá cũ .
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4">
              <img 
                alt="Modern kitchen in a 4-story house" 
                className="w-full h-auto mb-2" 
                height="200" 
                src="https://storage.googleapis.com/a1aa/image/kWMdGc1SZQZsHlsyLRFNqUCns0ZwIoW2xIxHR7s1Z4sM8W8E.jpg" 
                width="400" 
              />
              <h3 className="text-lg font-bold mb-2">
                Nhà phố 4 tầng cho gia đình trẻ với chi phí 2,5 tỷ đồng
              </h3>
              <p className="text-gray-700">
                Ngoài các không gian sinh hoạt cơ bản, công trình được chừa 1 m sân trước, 2 m sân sau để làm giếng trời giúp tăng thông thoáng.
              </p>
            </div>
            <div className="bg-white p-4">
              <img 
                alt="Aerial view of industrial park in Quang Binh" 
                className="w-full h-auto mb-2" 
                height="200" 
                src="https://storage.googleapis.com/a1aa/image/aDRZ3oZeYAxrci9VUg38wgpPLHGUnp5FGW4WcX9jnGca4t4JA.jpg" 
                width="400" 
              />
              <h3 className="text-lg font-bold mb-2">
                Quảng Bình sẽ có khu công nghiệp hàng trăm ha gần Quốc lộ 1A
              </h3>
              <p className="text-gray-700">
                Khu công nghiệp Cam Liên ở huyện Lệ Thủy vừa được chấp thuận chủ trương đầu tư với diện tích 450 ha.
              </p>
            </div>
            <div className="bg-white p-4">
              <img 
                alt="Cityscape view with buildings" 
                className="w-full h-auto mb-2" 
                height="200" 
                src="https://storage.googleapis.com/a1aa/image/idIC1zQVE2JhMFeL8Wz0JXwFMyYXEGFuHn65YdJsWFMc4t4JA.jpg" 
                width="400" 
              />
              <h3 className="text-lg font-bold mb-2">
                'Nhiều hồ sơ nộp trước 31/10 vẫn bị tính thuế đất theo bảng giá mới'
              </h3>
              <p className="text-gray-700">
                TP HCM – Viện Kinh tế tài nguyên và Môi trường cho rằng nhiều hồ sơ đất đai nộp trước ngày 31/10 nhưng vẫn bị tính thuế theo bảng giá điều chỉnh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
