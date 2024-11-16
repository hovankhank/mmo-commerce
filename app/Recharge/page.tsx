import React from 'react';

const Recharge = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Warning message */}
      <div className="text-red-500 text-sm mb-2">
        (1) Các bạn yên tâm giao dịch nhé. (2) Cảnh báo gian hàng không uy tín: Nếu chủ shop bán cho bạn sản phẩm không đúng định dạng: tài-khoản|mật-khẩu
      </div>

      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-4">
        Redeem gift-code
      </h1>

      {/* Redeem input and button */}
      <div className="flex justify-center mb-4">
        <input className="border border-gray-300 p-2 w-1/2" placeholder="Nhập vào mã gift *" type="text" />
        <button className="bg-green-500 text-white p-2 ml-2">
          Redeem
        </button>
      </div>

      {/* Payment details section */}
      <div className="border border-gray-300 p-4">
        <div className="flex justify-between items-center">
          {/* Left payment info */}
          <div>
            <div className="flex items-center mb-2">
              <img alt="MB logo" className="mr-2" height="50" src=" code.img.jpg" width="50" />
              <span className="text-3xl font-bold text-blue-600">MB</span>
            </div>
            <div className="text-lg">
              <p>
                STK: <span className="font-bold">0392035447</span>
              </p>
              <p>
                Người nhận: <span className="font-bold">HO VAN KHANH</span>
              </p>
              <p>
                Nội dung chuyển khoản: <span className="font-bold text-green-600">TS 483978</span>
                <button className="bg-red-500 text-white px-2 py-1 ml-2">
                  Copy
                </button>
              </p>
            </div>
          </div>

          {/* QR code section */}
          <div>
            <img alt="QR Code" height="150" src="https://storage.googleapis.com/a1aa/image/i1R1TLrmxbaIGl0TKk1E4ivY9Awm6cTyeVwfyevuBUipS1inA.jpg" width="150" />
            <p className="text-red-500 text-sm text-center mt-2">
              Quét mã QR Code để nội dung chuyển khoản chính xác
            </p>
          </div>
        </div>
      </div>

      {/* Notice section */}
      <div className="mt-4">
        <h2 className="text-red-500 font-bold">Lưu ý:</h2>
        <ul className="list-disc list-inside text-red-500">
          <li>Vui lòng điền chính xác nội dung chuyển khoản để thực hiện nạp tiền tự động.</li>
          <li>Tiền sẽ vào tài khoản trong vòng 1-10 phút kể từ khi giao dịch thành công. Tuy nhiên đôi lúc do một vài lỗi khách quan, tiền có thể sẽ chậm hơn một chút.</li>
          <li>Vào khung giờ từ 23-3h không thể kiểm tra lịch sử giao dịch, các giao dịch trong khung giờ này có thể mất từ 15 phút đến 2 giờ tiền mới vào tài khoản. Bạn có thể tránh nạp tiền trong khung giờ này để đỡ mất thời gian chờ đợi nhé.</li>
        </ul>
      </div>

      {/* Fixed footer section */}
      <div className="fixed bottom-4 left-4 bg-green-500 text-white p-2 rounded">
        <p>hàng top 1</p>
        <p>11h 19m 17s</p>
      </div>
    </div>
  );
};

export default Recharge;
