import React from 'react'
import {useRef, useState, useEffect} from 'react'
import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const Register = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)
    
    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState(null)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])
    
    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        console.log(match)
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user, pwd)
    }

  return (
    <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:
                <span className={validName ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validName || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input
                type = "text"
                id = "username"
                ref = {userRef}
                autoComplete="off"
                required
                value={user}
                onChange={(e)=>setUser(e.target.value)}
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={()=> setUserFocus(true)}
                onBlur={() => setUserFocus(false)}></input>
        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreeen"}>
            <FontAwesomeIcon icon={faInfoCircle}/>
            4 to 24 characters. <br/>
            Must begin with a letter <br/>
            Letters, numbers, underscores, hyphens allowed.
        </p>

        <label htmlFor="Password">Password:
                <span className={validPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validPwd || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input
                type = "password"
                id = "Password"
                required
                value={pwd}
                onChange={(e)=>setPwd(e.target.value)}
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={()=> setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}></input>
        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreeen"}>
            <FontAwesomeIcon icon={faInfoCircle}/>
            8 to 24 characters. <br/>
            Must include uppercase and lowecase characters, a number and a special character.<br/>
            Allowed special characters: <span aria-label="exclamation mark">!</span><span aria-label="at character">@</span><span aria-label="hashtag">#</span><span aria-label="dolalr sign">$</span>
        </p>

        <label htmlFor="confirm_pwd"> Confirm Password:
                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </label>
            <input
                type = "password"
                id = "confirm_pwd"
                required
                value={matchPwd}
                onChange={(e)=>setMatchPwd(e.target.value)}
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={()=> setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}></input>
        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreeen"}>
            <FontAwesomeIcon icon={faInfoCircle}/>
            Enter your password again.
        </p>

        <button disabled={!validName || !validPwd || !validMatch ? true : false}> Sign Up</button>
        </form>
    </section>
  )
}

export default Register