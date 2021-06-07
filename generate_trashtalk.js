//define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

//define generate trash talk function
function generateTrashTalk(option) {
  //error notice
  if (!option.character) {
    return '請選擇一個幹話對象'
  }
  //define things user might want
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  //create a collection to store things user picked up
  let request = []

  if (option.character === 'engineer') {
    request = request.concat(task.engineer)
    return `身為一個工程師${sample(request)}${sample(phrase)}吧！`
  }

  if (option.character === 'designer') {
    request = request.concat(task.designer)
    return `身為一個設計師${sample(request)}${sample(phrase)}吧！`
  }

  if (option.character === 'entrepreneur') {
    request = request.concat(task.entrepreneur)
    return `身為一個創業家${sample(request)}${sample(phrase)}吧！`
  }
}

// export generatePassword function for other files to use
module.exports = generateTrashTalk