(function () {
  var container = document.querySelector('.about-body');
  if (!container) return;

  var url = 'https://raw.githubusercontent.com/AliMorty/more_tea_community/main/README.md';

  fetch(url)
    .then(function (res) { return res.text(); })
    .then(function (md) {
      container.innerHTML = parseMarkdown(md);
    })
    .catch(function () {
      // Keep the existing HTML content as fallback
    });

  function parseMarkdown(text) {
    // Remove the top-level heading (# more_tea_community)
    text = text.replace(/^# .+\n/, '');

    // Process line by line
    var lines = text.split('\n');
    var result = '';
    var buffer = '';
    var inList = false;

    function flushBuffer() {
      if (buffer) {
        result += '<p>' + inlineFormat(buffer) + '</p>';
        buffer = '';
      }
    }

    function closeList() {
      if (inList) {
        result += '</ul>';
        inList = false;
      }
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trimEnd();

      // Empty line
      if (line.trim() === '') {
        flushBuffer();
        closeList();
        continue;
      }

      // Headers
      var headerMatch = line.match(/^(#{1,3}) (.+)$/);
      if (headerMatch) {
        flushBuffer();
        closeList();
        var level = headerMatch[1].length;
        result += '<h' + (level + 1) + '>' + inlineFormat(headerMatch[2]) + '</h' + (level + 1) + '>';
        continue;
      }

      // List items
      var listMatch = line.match(/^[-*] (.+)$/);
      if (listMatch) {
        flushBuffer();
        if (!inList) {
          result += '<ul>';
          inList = true;
        }
        result += '<li>' + inlineFormat(listMatch[1]) + '</li>';
        continue;
      }

      // Regular text — accumulate into paragraph
      buffer += (buffer ? '<br>' : '') + line.trim();
    }

    flushBuffer();
    closeList();
    return result;
  }

  function inlineFormat(text) {
    return text
      // Markdown links [text](url) — must come before bare URL detection
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      // Bold
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Bare URLs (not already inside an href)
      .replace(/(^|[^"=])(https?:\/\/[^\s<)]+)/g, '$1<a href="$2" target="_blank" rel="noopener">$2</a>');
  }
})();
