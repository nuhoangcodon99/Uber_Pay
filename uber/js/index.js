//Tạo một số hằng số đễ quản lí dữ liệu chuỗi
const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack"; //kế thừa để tái sử dụng

//tính tiền trên km đầu tiên cho mỗi loại xa
function giaTienKmDauTien(loai) {
    switch (loai) {
        case UBER_CAR: {
            return 8000;
        }
        case UBER_SUV: {
            return 9000;
        }
        case UBER_BLACK: {
            return 10000;
        }
    }
}

//tính tiền từ 1km đến 19 km
function gia1KmDen19Km(loai) {
    switch (loai) {
        case UBER_CAR: {
            return 7500;
        }
        case UBER_SUV: {
            return 8500;
        }
        case UBER_BLACK: {
            return 9500;
        }
    }
}

//tính tiền từ 19km trở lên
function gia19KmTroLen(loai) {
    switch (loai) {
        case UBER_CAR: {
            return 7000;
        }
        case UBER_SUV: {
            return 8000;
        }
        case UBER_BLACK: {
            return 9000;
        }
    }
}
//Tính tiền theo thời gian chờ 3p đầu free, mỗi khoảng 3p kế tiếp là 1 giá tiền cho mỗi loại xe khác nhau
function giaTienThoiGianCho(loai, timeWaiting) {
    if (timeWaiting <= 3) {
        return 0;
    }
    if (timeWaiting > 3) {
        switch (loai) {
            case UBER_CAR: {
                return Math.floor((timeWaiting - 3) / 3) * 2000;
            }
            case UBER_SUV: {
                return Math.floor((timeWaiting - 3) / 3) * 3000;
            }
            case UBER_BLACK: {
                return Math.floor((timeWaiting - 3) / 3) * 3500;
            }
        }
    }
}
function giaTienThoiGianChoHoaDon(loai, timeWaiting) {
    if (timeWaiting <= 3) {
        return 0;
    }
    if (timeWaiting > 3) {
        switch (loai) {
            case UBER_CAR: {
                return 2000;
            }
            case UBER_SUV: {
                return 3000;
            }
            case UBER_BLACK: {
                return 3500;
            }
        }
    }
}

document.getElementById("btnTinhTien").onclick = function () {
    let soKm = document.getElementById("txt-km").value * 1;
    let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
    // console.log(soKm);
    //console.log(thoiGianCho);
    let loaiXe = document.querySelector("input[type='radio']:checked").value; //lấy ra input có attribute là radio selector
    console.log(loaiXe); //lấy value từ thẻ input có type là radio lưu ý dùng CHECKED ,

    //Xử lí cho giá tiền theo khoảng cách
    let tienKmDauTien = giaTienKmDauTien(loaiXe);
    console.log("Tiền km đầu tiên: ", tienKmDauTien);
    let tienKm1Den19 = gia1KmDen19Km(loaiXe);
    console.log("Tiền mỗi Km từ 1 đến 19", tienKm1Den19);
    let tienKmTu19TroLen = gia19KmTroLen(loaiXe);
    console.log("Tiền trên mỗi km từ 19 km trở lên:", tienKmTu19TroLen);
    let tienThoiGianCho = giaTienThoiGianCho(loaiXe, thoiGianCho);
    console.log("Tiền chờ: ", tienThoiGianCho);
    let tongTien = 0;
    if (soKm <= 1) {
        tongTien = tienKmDauTien + tienThoiGianCho;
    } else if (soKm > 1 && soKm <= 19) {
        tongTien = tienKmDauTien + tienKm1Den19 * (soKm - 1) + tienThoiGianCho;
    } else {
        tongTien =
            tienKmDauTien +
            18 * tienKm1Den19 +
            (soKm - 19) * tienKmTu19TroLen +
            tienThoiGianCho;
    }
    // console.log("tổng tiền: ", tongTien);
    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML = new Intl.NumberFormat(
        "vi-VN",
        { style: "currency", currency: "VND" }
    ).format(tongTien);
};

document.getElementById("btnIn").onclick = function () {
    //xử lí tính toán
    //  document.getElementById("modelBody").innerHTML =
    let soKm = document.getElementById("txt-km").value * 1;
    let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
    // console.log(soKm);
    //console.log(thoiGianCho);
    let loaiXe = document.querySelector("input[type='radio']:checked").value; //lấy ra input có attribute là radio selector
    console.log(loaiXe); //lấy value từ thẻ input có type là radio lưu ý dùng CHECKED ,

    //Xử lí cho giá tiền theo khoảng cách
    let tienKmDauTien = giaTienKmDauTien(loaiXe);
    console.log("Tiền km đầu tiên: ", tienKmDauTien);
    let tienKm1Den19 = gia1KmDen19Km(loaiXe);
    console.log("Tiền mỗi Km từ 1 đến 19", tienKm1Den19);
    let tienKmTu19TroLen = gia19KmTroLen(loaiXe);
    console.log("Tiền trên mỗi km từ 19 km trở lên:", tienKmTu19TroLen);
    let tienThoiGianCho = giaTienThoiGianCho(loaiXe, thoiGianCho);
    console.log("Tiền chờ: ", tienThoiGianCho);
    let tienChoMoiLoaiXe = giaTienThoiGianChoHoaDon(loaiXe, thoiGianCho);
    console.log("tiền chờ cho loại xe:", tienChoMoiLoaiXe);
    let tongTien = 0;
    let soKm1 = 0;
    let soKm2 = 0;
    let soKm3 = 0;
    //tinh xem di trên mỗi quãng đường
    if (soKm <= 1) {
        soKm1 = 1;
    } else if (soKm > 1 && soKm <= 19) {
        soKm1 = 1;
        soKm2 = soKm - 1;
    } else {
        soKm1 = 1;
        soKm2 = 18;
        soKm3 = soKm - 19;
    }
    //Tính tổng tiền
    if (soKm <= 1) {
        tongTien = tienKmDauTien + tienThoiGianCho;
    } else if (soKm > 1 && soKm <= 19) {
        tongTien = tienKmDauTien + tienKm1Den19 * (soKm - 1) + tienThoiGianCho;
    } else {
        tongTien =
            tienKmDauTien +
            18 * tienKm1Den19 +
            (soKm - 19) * tienKmTu19TroLen +
            tienThoiGianCho;
    }
    // format tiền tệ đơn vị
    tongTien = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(tongTien);

    document.getElementById("modelBody").innerHTML = `
         <div class="table-responsive">
                            <table
                                class="table table-striped table-hover table-borderless table-dark align-middle"
                            >
                                <thead class="table-dark">
                                    <caption>
                                        Đại lí Cybersoft Uber
                                    </caption>
                                    <tr class="text-white bg-danger">
                                        <th colspan="1">Loại xe</th>
                                        <td colspan="3">${loaiXe}</td>
                                    </tr>
                                    <tr>
                                        <th>Chi tiết</th>
                                        <th>Sử dụng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành Tiền</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    <tr class="table-success">
                                        <td scope="row">Km đầu tiên</td>
                                        <td>${soKm1}</td>
                                        <td>${tienKmDauTien}</td>
                                        <td>${tienKmDauTien}</td>
                                    </tr>
                                    <tr class="table-success">
                                        <td scope="row">Từ 1 đến 19km</td>
                                
                                        <td>${soKm2}</td>
                                        <td>${tienKm1Den19}</td>
                                        <td>${soKm2 * tienKm1Den19}</td>
                                    </tr>
                                    <tr class="table-success">
                                        <td scope="row">Từ 19 km trở lên</td>
                                        <td>${soKm3}</td>
                                        <td>${tienKmTu19TroLen}</td>
                                        <td>${soKm3 * tienKmTu19TroLen}</td>
                                    </tr>
                                    <tr class="table-success">
                                        <td scope="row">
                                            Thời gian chờ trên 3 phút                                         
                                        </td>
                                        <td>${thoiGianCho - 3} phút</td>
                                        <td>${tienChoMoiLoaiXe}/ 3 phút</td>
                                        <td>${tienThoiGianCho}</td>
                                    </tr>
                                    <tr>
                                        <td colspan = "3">Tổng tiền</td>
                                         <td >: ${tongTien}</td>
                                    </tr>
                                </tbody>
                                <tfoot></tfoot>
                            </table>
                        </div>
    
    `;

    $("#inHoaDonModal").modal("show");
};
