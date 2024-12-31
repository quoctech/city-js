/**
 * Định nghĩa: Callback (cb) là một hàm được truyền vào một hàm khác như một đối số 
 *  và hàm này sẽ được gọi lại khi một sự kiện nào đó xảy ra hoặc một tác vụ nào đó hoàn thành.
 * 
 * Cho 1 ví dụ:
 * Trong thực tế việc lấy dữ liệu từ database hoặc API sẽ tốn 1 khoảng thời gian (trong ví dụ này ta giả sử là 2s)
 * Sau khi nhận được data "1 danh sách bài viết" thì tiến hành xử lý 1 logic gì đó tùy ý.
 */

/**
 * Hàm lấy danh sách bài viết từ DB
 * Thông tin bài viết gồm:
 * - id là kiểu số nguyên tăng dần
 * - title là kiểu string, là tiêu đề bài viết
 * - content là kiểu text, là nội dung bài viết
 * - category_id là kiểu số nguyên, là id chuyên mục mà bài viết thuộc về
 * 
 * Giải thích thêm: chuyên mục 1 (cateogry_id = 1 nghĩa là GIẢI TRÍ) -> nhìn vào data dưới ta phát biểu
 * "Bài viết 1 thuộc chuyên mục GIẢI TRÍ hoặc chuyên mục GIẢI TRÍ chứa bài viết 1"
 * 
 * @param callbackFn là 1 callback function được truyền vào từ bên ngoài
 */
function getPostsFromDatabase(callbackFn) {
    // sử dụng setTimeout để giả lập việc get data từ database. Mất khoảng 2 giây để lấy dữ liệu danh sách bài viết
    setTimeout(function() {
        var posts = [
            {id: 1, title: 'Bài viết 1', content: 'Nội dung bài viết 1', category_id: 1},
            {id: 2, title: 'Bài viết 2', content: 'Nội dung bài viết 2', category_id: 2},
            {id: 3, title: 'Bài viết 3', content: 'Nội dung bài viết 3', category_id: 1},
        ];

        // kiểm tra callbackFn có phải 1 là function hay không rồi mới thực thi
        if (typeof callbackFn === 'function') {
            callbackFn(posts);

            // CASE truyền tham số cho callback function sai thì sẽ vào dòng 58
            // callbackFn(null);
        } else {
            console.log('ERROR: callbackFn truyền vào không phải là 1 function!');
        }
    }, 2000);
}

/**
 * Hàm này là vẽ nội dung bài viết ra màn hình với định dạng
 * id - title - content
 * 
 * @param posts là 1 array chứa các object bài viết
 */
function renderPosts(posts) {
    if (Array.isArray(posts)) {
        for (var i = 0; i < posts.length; i++) {
            var post = posts[i];

            console.log(`${post.id} - ${post.title} - ${post.content}`);
        }
    } else {
        console.log('ERROR: Tham số post không phải là 1 array!', posts);
    }
}

//Cách 2: dùng anonymous function
var renderPostsAnonymousFn = function(posts) {
    if (Array.isArray(posts)) {
        for (var i = 0; i < posts.length; i++) {
            var post = posts[i];

            console.log(`${post.id} - ${post.title} - ${post.content}`);
        }
    } else {
        console.log('ERROR: Tham số post không phải là 1 array!', posts);
    }
}

// CASE OK, render bài viết ra màn hình bình thường
// Ưu điểm: rõ ràng, tường minh, có tính tái sử dụng callback
getPostsFromDatabase(renderPosts);

// CASE truyền tham số không phải là 1 callback
//getPostsFromDatabase(false);

// CASE OK, render bài viết ra màn hình với callback viết kiểu anonymous function
//getPostsFromDatabase(renderPostsAnonymousFn);

// CASE OK, render bài viết truyền thằng function vào param
// Ưu điểm: Không cần phải tạo callback bên ngoài nếu callback dùng cho việc tái sử dụng
/*getPostsFromDatabase(function (posts) {
    if (Array.isArray(posts)) {
        for (var i = 0; i < posts.length; i++) {
            var post = posts[i];

            console.log(`${post.id} - ${post.title} - ${post.content}`);
        }
    } else {
        console.log('ERROR: Tham số post không phải là 1 array!', posts);
    }
});*/