'use client'

import { useEffect, useState } from 'react'

export default function KakaoMapDebugLoader() {
  const [status, setStatus] = useState("초기화 중...")
  const [referer, setReferer] = useState("")
  const [scriptUrl, setScriptUrl] = useState("")
  const [loadingTime, setLoadingTime] = useState(0)
  const [responseStatus, setResponseStatus] = useState("아직 없음")

  useEffect(() => {
    const jsKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY
    const url = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${jsKey}&autoload=false`
    setScriptUrl(url)

    setReferer(window.location.href)
    setStatus("Kakao SDK 스크립트 로드 시작...")

    const start = Date.now()

    fetch(url)
      .then(res => {
        setResponseStatus(`${res.status} ${res.statusText}`)
        if (!res.ok) {
          setStatus(`❌ SDK 로드 실패 — HTTP ${res.status}`)
          return
        }
        setStatus("스크립트 다운로드 성공 — DOM 삽입 중...")

        const script = document.createElement("script")
        script.src = url
        script.onload = () => {
          setStatus("✅ Kakao SDK 로드 성공!")
        }
        script.onerror = () => {
          setStatus("❌ 스크립트 onerror 발생 — 로드 실패")
        }
        document.head.appendChild(script)
      })
      .catch(err => {
        console.error(err)
        setStatus("❌ fetch 자체 실패 — 네트워크 차단 또는 도메인 인증 오류 가능")
      })
      .finally(() => {
        setLoadingTime(Date.now() - start)
      })

  }, [])

  return (
    <div style={{
      position: "fixed",
      bottom: 10,
      left: 10,
      padding: "16px",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      borderRadius: "10px",
      width: "350px",
      fontSize: "12px",
      zIndex: 999999,
      lineHeight: "1.5"
    }}>
      <div style={{ fontWeight: "bold", fontSize: "14px", marginBottom: "6px" }}>
        🐞 Kakao Map Debug Panel
      </div>

      <div><b>현재 페이지:</b> {referer}</div>
      <div><b>요청한 스크립트 URL:</b> {scriptUrl}</div>
      <div><b>스테이터스:</b> {status}</div>
      <div><b>HTTP 응답:</b> {responseStatus}</div>
      <div><b>로드 시간:</b> {loadingTime}ms</div>

      <div style={{ marginTop: "10px", opacity: 0.7 }}>
        ※ 이 패널은 배포 환경에서 도메인 인증 문제를 확인하기 위해 만들어진 디버그 도구입니다.
      </div>
    </div>
  )
}
