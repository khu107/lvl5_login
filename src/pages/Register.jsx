import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { ADDUSER } from '../redux/module/user';
import axios from 'axios';
import { useState } from 'react';
// import { useMutation } from 'react-query';

// const createUser = async (userData) => {
//   const response = await axios.post('http://3.38.191.164/register', userData); // API 엔드포인트와 요청 데이터에 따라 수정 필요
//   return response.data;
// };

export default function Register() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

  // const changeInputValue = (e) => {
  //   const { name, value } = e.target;
  //   const payload = { [name]: value };
  //   dispatch(ADDUSER(payload));
  // };
  const changeInputValue = (e) => {
    const { name, value } = e.target;
    if (name === 'id') {
      setId(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      id,
      password,
    };
    try {
      await axios
        .post(' http://3.38.191.164/register', userData)
        .then((res) => console.log(res));
      navigate('/login'); // 예시로 성공 페이지로 이동하는 코드 추가
    } catch (error) {
      console.error('Error creating user:', error);
    }
    // 여기서 추가적인 처리를 수행할 수 있습니다.
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">회원가입 </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      value={id}
                      name="id"
                      onChange={changeInputValue}
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      아이디
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      value={password}
                      name="password"
                      onChange={changeInputValue}
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      비밀번호
                    </label>
                  </div>
                  <div className="relative flex gap-3">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                    >
                      회원가입
                    </button>
                    <button
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                      onClick={() => navigate('/login')}
                    >
                      로그인하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
