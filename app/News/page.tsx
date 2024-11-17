 'use client';
import Image from "next/image";


const News = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto p-4">
                    <h1 className="text-2xl font-bold text-blue-600">
                        MMO là gì? Xu hướng kiếm tiền online hot nhất trong 2024 tới
                    </h1>
                    <div className="flex items-center justify-between text-gray-500 text-sm mt-2">
                        <span>#Kiến thức</span>
                        <span>
                            <i className="far fa-clock"></i> 02/05/2024
                        </span>
                    </div>
                    <p className="mt-4">
                        MMO bắt đầu được biết đến tại Việt Nam thời gian gần đây như là phương thức kiếm tiền Online. Tuy
                        vậy, chúng vẫn bị nhiều ý kiến nghi ngờ về tính xác thực. Vậy{' '}
                        <a className="text-blue-600" href="#">
                            MMO là gì?
                        </a>{' '}
                        Đây có phải là phương thức an toàn, đáng tin cậy để đầu tư? Tìm hiểu cặn kẽ về hình thức kiếm tiền
                        MMO và các thông tin có liên quan trong bài viết này.
                    </p>
                    <div className="mt-6">
                        {/* Hình ảnh sử dụng Image của Next.js */}
                        <Image
                            src="/bai2.png"  // Đảm bảo rằng hình ảnh đã được đặt trong thư mục public
                            alt="Picture of the author"
                            width={300}
                            height={200}
                        />
                    </div>

                    <div className="mt-6">
                        <p className="text-center text-gray-500 italic">
                            MMO là phương thức kiếm tiền online
                        </p>
                        <h2 className="text-3xl font-bold mt-4">Thế nào là MMO?</h2>
                        <p className="mt-4">
                            <span className="font-bold">Làm MMO là gì?</span> MMO (Make Money Online) là thuật ngữ được sử
                            dụng để chỉ các hoạt động kiếm tiền trực tuyến. Đây là một lĩnh vực phát triển nhanh chóng trong
                            thời đại công nghệ số như hiện nay, cho phép cá nhân và doanh nghiệp tạo ra thu nhập từ việc kinh
                            doanh trên Internet. Nó được coi là một hình thức để nhiều người kiếm thêm thu nhập hấp dẫn.
                        </p>
                        <p className="mt-4">
                            <span className="font-bold">MMO là nghề gì?</span> Các hình thức làm MMO có thể bao gồm bán hàng
                            trực tuyến, tiếp thị liên kết, hay quảng cáo trên mạng xã hội, viết blog hay vlog, thiết kế website
                            và ứng dụng di động. Đồng thời cung cấp dịch vụ trực tuyến như giảng dạy hoặc tư vấn. Các phương
                            pháp này cho phép người dùng khai thác tiềm năng của Internet để kiếm tiền và xây dựng một nguồn
                            thu nhập ổn định.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
