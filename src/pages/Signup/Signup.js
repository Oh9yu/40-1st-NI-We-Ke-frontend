import React from 'react';
import { useLocation } from 'react-router-dom';
import User from '../Signup/User/User';
import '../Signup/Signup.scss';

const Signup = () => {
  const location = useLocation();
  const currentURL = location.path;
  const isSelectLogin = currentURL === '/login' && true;

  return (
    <section className="signup">
      <User text={isSelectLogin ? LOGIN_TEXT : SIGNUP_TEXT} />
    </section>
  );
};

export default Signup;

const LOGIN_TEXT = {
  title: '로그인',
  link: '로그인을 위해 이메일을 입력해주세요',
  url: '/signup',
};

const SIGNUP_TEXT = {
  title: '계속',
  link: '가입을 위해 이메일을 입력해주세요',
  url: '/login',
  agree:
    '계속 진행하면 나위키의 개인 정보 처리 방침 및 이용약관에 동의하게 됩니다.',
};
