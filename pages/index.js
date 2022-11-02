import { useState, useEffect, useRef } from "react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Signup from "../components/Signup";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import RightPanel from "../components/RightPanel";
import TopCard from "../components/TopCard";
import TweetCard from "../components/TweetCard";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(true);
  const [userName, setUserName] = useState("");
  const [tweetData, setTweetData] = useState([]);
  const inputRef = useRef("");

  const auth = getAuth();
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const uid = user.uid;
      setIsLoggedIn(true);
      setUserName(user.displayName);
    } else {
      // User is signed out
    }
  });

  const sign_out = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLoggedIn(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "tweet"));
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setTweetData(data);
  };
  const uploadTweet = () => {
    try {
      const docRef = addDoc(collection(db, "tweet"), {
        name: user.displayName,
        tweetData: inputRef.current.value,
      });
      getData();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    inputRef.current.value = "";
  };

  useEffect(() => {
    getData();
  }, []);

  if (!isLoggedIn) {
    if (showLoginPage) {
      return (
        <Login
          setShowLoginPage={setShowLoginPage}
          setIsLoggedIn={setIsLoggedIn}
        />
      );
    } else {
      return (
        <Signup
          setShowLoginPage={setShowLoginPage}
          setIsLoggedIn={setIsLoggedIn}
          setUserName={setUserName}
        />
      );
    }
  } else {
    return (
      <div className="flex flex-col md:flex-row min-h-[100vh]">
        <Sidebar userName={userName} sign_out={sign_out} />
        <div className="bg-black min-h-[100vh] md:ml-36 md:mr-96 w-full text-white">
          <TopCard
            userEmail={user.email}
            userName={userName}
            uploadTweet={uploadTweet}
            inputRef={inputRef}
          />
          {tweetData.map((data) => {
            return <TweetCard {...data} key={user.uid}/>;
          })}
        </div>
        <RightPanel />
      </div>
    );
  }
}
