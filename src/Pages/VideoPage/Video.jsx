import { Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useProfile from "../../Hooks/useProfile";
import "./Video.scss";
import Like from "./img/like.svg";
import DisLike from "./img/disLike.svg";
import Share from "./img/share.svg";
import Menu from "./img/Menu.svg";
import ComponentVideo from "./ComponentVideo";

const Profile = () => {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useProfile();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos/" + id)
      .then((res) => res.json())
      .then((data) => {
				// setCards(data)
        setUser(data);
        console.log(id);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="video-div ">
      <div className="idVideoDiv ">
        <Button className="p-0 rounded-4">
          <img
            className="video-img"
            src={`https://picsum.photos/id/${user.id}/900/480/`}
            alt={user.title}
            width={900}
            height={480}
          />
        </Button>

        <h2 className="video-title mt-1">{user.title} </h2>

        <div className="d-flex align-items-center justify-content-between">
          <span className="views">{`${user.id}k views`}</span>

          <ul className="video-nav d-flex align-items-center mb-0  justify-content-between list-unstyled ">
            <li className="video-item">
              <Button className="rounded-4">
                <img className="me-2" src={Like} alt={user.title} />
                <span>{`${user.id * 3}k`}</span>
              </Button>
            </li>
            <li className="video-item">
              <Button className="rounded-4 ms-4">
                <img className="me-2" src={DisLike} alt={user.title} />
                <span>{`${user.id}k`}</span>
              </Button>
            </li>
            <li className="video-item">
              <Button className="rounded-4 ms-4">
                <img className="me-2" src={Share} alt={user.title} />
                <span>Share</span>
              </Button>
            </li>
            <li className="video-item">
              <Button className="rounded-4 d-inline-block ms-4">
                <img className=" mb-1" src={Menu} alt={user.title} />
              </Button>
            </li>
          </ul>
        </div>

        <div className="d-flex idVideoDiv align-items-start justify-content-between mt-4">
          <img

            className="avatar-profil me-3 mt-2 "
            src={`https://picsum.photos/id/${user.id}/90/90/`}
            alt={user.title}
            width={90}
            height={90}
          />
          <div className="">
            <h3>Vanilla</h3>
            <span>Published on 14 Jun 2019</span>
            <p className="video-text mt-1">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy; it is based on
              a number of factors, including ad placement, demographic, even the
              consumer’s mood when they see your ad.
            </p>

						<span>Show More</span>
          </div>

					<button className="button2 text-center">Subscribe</button>
        </div>
      </div>

      <>
				<ComponentVideo/>
			</>
    </div>
  );
};

export default Profile;
