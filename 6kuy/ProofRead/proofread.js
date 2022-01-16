function proofread(str) {
  return str.toLowerCase()
      .replace(/ie/g, 'ei')
      .split('. ')
      .map(item => item[0].toUpperCase() + item.slice(1))
      .join('. ')
} 