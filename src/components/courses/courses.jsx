import React, { useEffect, useState } from "react";
import axios from "axios";
import {AiOutlineFileSync} from "react-icons/ai";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);

  // ...
useEffect(() => {
  axios
    .get("http://localhost:3000/api/course/getAllCourses")
    .then((response) => {
      setCourses(response.data);
    })
    .catch((error) => {
      console.error("Error fetching courses:", error);
    });
}, []);
// ...

  return (
    <section id="courses">
      {/* <h5>Courses I have taught</h5> */}
      <h2>Courses I have taught</h2>
      <Swiper
      className="container courses__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
       >
      {courses.map((course) => (
        <SwiperSlide className="courses" key={course.id}>
          <div className="client__avatar">
            <a href={course.link}>
              <AiOutlineFileSync />
            </a>
          </div>
          <h5 className="client__name">{course.title}</h5>
          <p className="client__review">{course.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
    </section>
  );
}

export default Courses;
