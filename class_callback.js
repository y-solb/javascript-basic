class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }
  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter); // callback이 있다면 뒤를 실행
    }
  }
}
function printSomething(num) {
  console.log(`yo!${num}`);
}
function alertNum(num) {
  alert(`Wow!${num}`);
}

// class의 재사용성
const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
