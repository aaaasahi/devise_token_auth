import React, { useState } from 'react'
import axios from 'axios'

export const Signup = () => {
  const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        axios({
          method: 'POST',
          url: 'http://localhost:3000/api/auth',
          data: {
            email: email,
            password: password,
            name: name
          }
        })
        .then(response => {
          console.log(response)
          localStorage.setItem('user',
            JSON.stringify({
              'access-token': response.headers['access-token'],
              'client': response.headers['client'],
              'uid': response.data.data.uid
          }))
          window.location = '/'
        })
      }
    return (
        <div>
            <p>新規登録</p>
            <form onSubmit={handleSubmit}>
            <input
                    type="name"
                    name="name"
                    placeholder="name"
                    autoComplete="off"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    autoComplete="off"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button type="submit">登録</button>
            </form>
        </div>
    )
}