<template>
  <div class="content-area">
    <h1 class="changelog_title">Change Log</h1>
    <div class="changelog">
      <div class="block">
        <h4>2021.08.07</h4>
        <p>✏️ 상단 배너 학사공지 이미지 교체</p>
      </div>
      <div class="block">
        <h4>2021.04.05</h4>
        <p>🔧 코로나19로 인한 시간표 변경사항 반영</p>
      </div>
      <div class="block">
        <h4>2020.12.09</h4>
        <p>🎁 크리스마스 테마 적용</p>
      </div>
      <div class="block">
        <h4>2020.11.11</h4>
        <p>🎁 다국어 부분 지원 (한국어, 영어)</p>
      </div>
      <div class="block">
        <h4>2020.09.17</h4>
        <p>🔧 코로나19로 인한 시간표 변경사항 반영</p>
      </div>
      <div class="block">
        <h4>2020.08.26</h4>
        <p>🔧 원격수업 전환으로 인한 시간표 변경사항 반영</p>
      </div>
      <div class="block">
        <h4>2020.06.15</h4>
        <p>🔧 기말고사 기간 주중/주말 한대앞행 추가배차 반영</p>
      </div>
      <div class="block">
        <h4>2020.06.01</h4>
        <p>🔧 대면수업 확대로 인한 시간표 변경사항 반영</p>
        <p>✏️ 상단 배너 학사공지 이미지로 교체</p>
      </div>
      <div class="block">
        <h4>2020.04.22</h4>
        <p>🔧 코로나19로 인한 한대앞행 노선 추가배차 반영</p>
      </div>
      <div class="block">
        <h4>2020.04.13</h4>
        <p>🔧 코로나19로 인한 무기한 개강 연기 반영</p>
      </div>
      <div class="block">
        <h4>2020.03.09</h4>
        <p>✏️ 사용안내 링크 추가, 변경사항 링크 추가</p>
        <p>🎁 정식 배포</p>
      </div>

      <div class="block">
        <h4>2020.03.06</h4>
        <p>✏️ 바닥글 삽입 - 사용안내, 변경사항</p>
      </div>

      <div class="block">
        <h4>2020.03.05</h4>
        <p>🔧 코로나19 관련 개강연기 반영</p>
      </div>

      <div class="block">
        <h4>2020.02.18</h4>
        <p>🔧 2020학년 1학기 학사일정 반영</p>
      </div>

      <div class="block">
        <h4>2020.02.02</h4>
        <p>✏️ 배너 이미지 추가 - 신입생 환영</p>
      </div>

      <div class="block">
        <h4>2020.01.01</h4>
        <p>🔧 배너 이미지 수정 - New Year</p>
      </div>

      <div class="block">
        <h4>2019.12.22</h4>
        <p>🔧 국경일 및 휴업일 학사일정 반영</p>
        <p>🔧 계절학기 기간 시간표 전환버그 수정</p>
      </div>

      <div class="block">
        <h4>2019.12.6</h4>
        <p>🎁 베타 릴리즈</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangeLog"
};
</script>

<style scoped>
h4,
p {
  margin-block-start: 0.2em;
  margin-block-end: 0.2em;
}

.block {
  margin-bottom: 1em;
}
.content-area {
  width: 80%;
  margin: auto;
  justify-content: space-between;
}

.changelog {
  text-align: left;
}
</style>
