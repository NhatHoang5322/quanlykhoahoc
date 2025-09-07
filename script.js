function addCourse() {
    const input = document.getElementById("newCourse");
    const courseName = input.value.trim();
    if(courseName === "") {
        alert("Vui lòng nhập tên khóa học!");
        return;
    }

    const ul = document.getElementById("courseList");
    const li = document.createElement("li");
    li.textContent = courseName;
    ul.appendChild(li);

    input.value = ""; // Xóa input sau khi thêm
}
