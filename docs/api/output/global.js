Ext.data.JsonP.global({"tagname":"class","name":"global","alternateClassNames":[],"members":[{"name":"alphaCharsAndMarksStr","tagname":"property","owner":"global","id":"property-alphaCharsAndMarksStr","meta":{}},{"name":"alphaCharsStr","tagname":"property","owner":"global","id":"property-alphaCharsStr","meta":{}},{"name":"alphaNumericAndMarksCharsStr","tagname":"property","owner":"global","id":"property-alphaNumericAndMarksCharsStr","meta":{}},{"name":"alphaNumericCharsStr","tagname":"property","owner":"global","id":"property-alphaNumericCharsStr","meta":{}},{"name":"decimalNumbersStr","tagname":"property","owner":"global","id":"property-decimalNumbersStr","meta":{}},{"name":"domainNameRegex","tagname":"property","owner":"global","id":"property-domainNameRegex","meta":{}},{"name":"htmlCharacterEntitiesRegex","tagname":"property","owner":"global","id":"property-htmlCharacterEntitiesRegex","meta":{"private":true}},{"name":"htmlRegex","tagname":"property","owner":"global","id":"property-htmlRegex","meta":{"private":true}},{"name":"marksStr","tagname":"property","owner":"global","id":"property-marksStr","meta":{}},{"name":"captureTagName","tagname":"method","owner":"global","id":"method-captureTagName","meta":{}},{"name":"defaults","tagname":"method","owner":"global","id":"method-defaults","meta":{}},{"name":"ellipsis","tagname":"method","owner":"global","id":"method-ellipsis","meta":{}},{"name":"emitTagAndPreviousTextNode","tagname":"method","owner":"global","id":"method-emitTagAndPreviousTextNode","meta":{}},{"name":"getDomainNameStr","tagname":"method","owner":"global","id":"method-getDomainNameStr","meta":{}},{"name":"indexOf","tagname":"method","owner":"global","id":"method-indexOf","meta":{}},{"name":"parseHtml","tagname":"method","owner":"global","id":"method-parseHtml","meta":{}},{"name":"reconsumeCurrentCharacter","tagname":"method","owner":"global","id":"method-reconsumeCurrentCharacter","meta":{}},{"name":"remove","tagname":"method","owner":"global","id":"method-remove","meta":{}},{"name":"resetToDataState","tagname":"method","owner":"global","id":"method-resetToDataState","meta":{}},{"name":"splitAndCapture","tagname":"method","owner":"global","id":"method-splitAndCapture","meta":{}},{"name":"startNewTag","tagname":"method","owner":"global","id":"method-startNewTag","meta":{}},{"name":"stateDoctype","tagname":"method","owner":"global","id":"method-stateDoctype","meta":{}},{"name":"throwUnhandledStateError","tagname":"method","owner":"global","id":"method-throwUnhandledStateError","meta":{}},{"name":"truncateEnd","tagname":"method","owner":"global","id":"method-truncateEnd","meta":{}},{"name":"truncateMiddle","tagname":"method","owner":"global","id":"method-truncateMiddle","meta":{}},{"name":"truncateSmart","tagname":"method","owner":"global","id":"method-truncateSmart","meta":{}}],"aliases":{},"files":[{"filename":"","href":""}],"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>Global variables and functions.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-alphaCharsAndMarksStr' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/regex-lib.html#global-property-alphaCharsAndMarksStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-alphaCharsAndMarksStr' class='name expandable'>alphaCharsAndMarksStr</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The string form of a regular expression that would match all of the\nalphabetic (\"letter\") chars and combining marks i...</div><div class='long'><p>The string form of a regular expression that would match all of the\nalphabetic (\"letter\") chars and combining marks in the unicode character set\nwhen placed in a RegExp character class (<code>[]</code>). This includes all\ninternational alphabetic characters.</p>\n\n<p>These would be the characters matched by unicode regex engines <code>\\p{L}\\p{M}</code>\nescapes.</p>\n</div></div></div><div id='property-alphaCharsStr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/regex-lib.html#global-property-alphaCharsStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-alphaCharsStr' class='name expandable'>alphaCharsStr</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The string form of a regular expression that would match all of the\nalphabetic (\"letter\") chars in the unicode charac...</div><div class='long'><p>The string form of a regular expression that would match all of the\nalphabetic (\"letter\") chars in the unicode character set when placed in a\nRegExp character class (<code>[]</code>). This includes all international alphabetic\ncharacters.</p>\n\n<p>These would be the characters matched by unicode regex engines <code>\\p{L}</code>\nescape (\"all letters\").</p>\n\n<p>Taken from the XRegExp library: http://xregexp.com/ (thanks @https://github.com/slevithan)\nSpecifically: http://xregexp.com/v/3.2.0/xregexp-all.js, the 'Letter'\n  regex's bmp</p>\n\n<p>VERY IMPORTANT: This set of characters is defined inside of a Regular\n  Expression literal rather than a string literal to prevent UglifyJS from\n  compressing the unicode escape sequences into their actual unicode\n  characters. If Uglify compresses these into the unicode characters\n  themselves, this results in the error \"Range out of order in character\n  class\" when these characters are used inside of a Regular Expression\n  character class (<code>[]</code>). See usages of this const. Alternatively, we can set\n  the UglifyJS option <code>ascii_only</code> to true for the build, but that doesn't\n  help others who are pulling in Autolinker into their own build and running\n  UglifyJS themselves.</p>\n</div></div></div><div id='property-alphaNumericAndMarksCharsStr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/regex-lib.html#global-property-alphaNumericAndMarksCharsStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-alphaNumericAndMarksCharsStr' class='name expandable'>alphaNumericAndMarksCharsStr</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The string form of a regular expression that would match all of the\nletters, combining marks, and decimal number char...</div><div class='long'><p>The string form of a regular expression that would match all of the\nletters, combining marks, and decimal number chars in the unicode character\nset when placed in a RegExp character class (<code>[]</code>).</p>\n\n<p>These would be the characters matched by unicode regex engines\n<code>[\\p{L}\\p{M}\\p{Nd}]</code> escape (\"all letters, combining marks, and decimal\nnumbers\")</p>\n</div></div></div><div id='property-alphaNumericCharsStr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/regex-lib.html#global-property-alphaNumericCharsStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-alphaNumericCharsStr' class='name expandable'>alphaNumericCharsStr</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The string form of a regular expression that would match all of the\nletters and decimal number chars in the unicode c...</div><div class='long'><p>The string form of a regular expression that would match all of the\nletters and decimal number chars in the unicode character set when placed in\na RegExp character class (<code>[]</code>).</p>\n\n<p>These would be the characters matched by unicode regex engines\n<code>[\\p{L}\\p{Nd}]</code> escape (\"all letters and decimal numbers\")</p>\n</div></div></div><div id='property-decimalNumbersStr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/regex-lib.html#global-property-decimalNumbersStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-decimalNumbersStr' class='name expandable'>decimalNumbersStr</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The string form of a regular expression that would match all of the\ndecimal number chars in the unicode character set...</div><div class='long'><p>The string form of a regular expression that would match all of the\ndecimal number chars in the unicode character set when placed in a RegExp\ncharacter class (<code>[]</code>).</p>\n\n<p>These would be the characters matched by unicode regex engines <code>\\p{Nd}</code>\nescape (\"all decimal numbers\")</p>\n\n<p>Taken from the XRegExp library: http://xregexp.com/ (thanks @https://github.com/slevithan)\nSpecifically: http://xregexp.com/v/3.2.0/xregexp-all.js, the 'Decimal_Number'\n  regex's bmp</p>\n\n<p>VERY IMPORTANT: This set of characters is defined inside of a Regular\n  Expression literal rather than a string literal to prevent UglifyJS from\n  compressing the unicode escape sequences into their actual unicode\n  characters. If Uglify compresses these into the unicode characters\n  themselves, this results in the error \"Range out of order in character\n  class\" when these characters are used inside of a Regular Expression\n  character class (<code>[]</code>). See usages of this const. Alternatively, we can set\n  the UglifyJS option <code>ascii_only</code> to true for the build, but that doesn't\n  help others who are pulling in Autolinker into their own build and running\n  UglifyJS themselves.</p>\n</div></div></div><div id='property-domainNameRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/regex-lib.html#global-property-domainNameRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-domainNameRegex' class='name expandable'>domainNameRegex</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>A regular expression to match domain names of a URL or email address. ...</div><div class='long'><p>A regular expression to match domain names of a URL or email address.\nEx: 'google', 'yahoo', 'some-other-company', etc.</p>\n</div></div></div><div id='property-htmlCharacterEntitiesRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/html-parser-old.html#global-property-htmlCharacterEntitiesRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-htmlCharacterEntitiesRegex' class='name expandable'>htmlCharacterEntitiesRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The regular expression that matches common HTML character entities. ...</div><div class='long'><p>The regular expression that matches common HTML character entities.</p>\n\n<p>Ignoring &amp; as it could be part of a query string -- handling it separately.</p>\n<p>Defaults to: <code>/(&amp;nbsp;|&amp;#160;|&amp;lt;|&amp;#60;|&amp;gt;|&amp;#62;|&amp;quot;|&amp;#34;|&amp;#39;)/gi</code></p></div></div></div><div id='property-htmlRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/html-parser-old.html#global-property-htmlRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-htmlRegex' class='name expandable'>htmlRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The regular expression used to pull out HTML tags from a string. ...</div><div class='long'><p>The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and\nattribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.</p>\n\n<p>Capturing groups:</p>\n\n<ol>\n<li>The \"!DOCTYPE\" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.</li>\n<li>If it is an end tag, this group will have the '/'.</li>\n<li>If it is a comment tag, this group will hold the comment text (i.e.\nthe text inside the <code>&amp;lt;!--</code> and <code>--&amp;gt;</code>.</li>\n<li>The tag name for a tag without attributes (other than the &lt;!DOCTYPE&gt; tag)</li>\n<li>The tag name for a tag with attributes (other than the &lt;!DOCTYPE&gt; tag)</li>\n</ol>\n\n</div></div></div><div id='property-marksStr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/regex-lib.html#global-property-marksStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-marksStr' class='name expandable'>marksStr</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The string form of a regular expression that would match all of the\ncombining mark characters in the unicode characte...</div><div class='long'><p>The string form of a regular expression that would match all of the\ncombining mark characters in the unicode character set when placed in a\nRegExp character class (<code>[]</code>).</p>\n\n<p>These would be the characters matched by unicode regex engines <code>\\p{M}</code>\nescape (\"all marks\").</p>\n\n<p>Taken from the XRegExp library: http://xregexp.com/ (thanks @https://github.com/slevithan)\nSpecifically: http://xregexp.com/v/3.2.0/xregexp-all.js, the 'Mark'\n  regex's bmp</p>\n\n<p>VERY IMPORTANT: This set of characters is defined inside of a Regular\n  Expression literal rather than a string literal to prevent UglifyJS from\n  compressing the unicode escape sequences into their actual unicode\n  characters. If Uglify compresses these into the unicode characters\n  themselves, this results in the error \"Range out of order in character\n  class\" when these characters are used inside of a Regular Expression\n  character class (<code>[]</code>). See usages of this const. Alternatively, we can set\n  the UglifyJS option <code>ascii_only</code> to true for the build, but that doesn't\n  help others who are pulling in Autolinker into their own build and running\n  UglifyJS themselves.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-captureTagName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/parse-html.html#global-method-captureTagName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-captureTagName' class='name expandable'>captureTagName</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Captures the tag name from the start of the tag to the current character\nindex, and converts it to lower case ...</div><div class='long'><p>Captures the tag name from the start of the tag to the current character\nindex, and converts it to lower case</p>\n</div></div></div><div id='method-defaults' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/utils.html#global-method-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-defaults' class='name expandable'>defaults</a>( <span class='pre'>dest, src</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Assigns (shallow copies) the properties of src onto dest, if the\ncorresponding property on dest === undefined. ...</div><div class='long'><p>Assigns (shallow copies) the properties of <code>src</code> onto <code>dest</code>, if the\ncorresponding property on <code>dest</code> === <code>undefined</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dest</span> : Object<div class='sub-desc'><p>The destination object.</p>\n</div></li><li><span class='pre'>src</span> : Object<div class='sub-desc'><p>The source object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The destination object (<code>dest</code>)</p>\n</div></li></ul></div></div></div><div id='method-ellipsis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/utils.html#global-method-ellipsis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-ellipsis' class='name expandable'>ellipsis</a>( <span class='pre'>str, truncateLen, [ellipsisChars]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Truncates the str at len - ellipsisChars.length, and adds the ellipsisChars to the\nend of the string (by default, two...</div><div class='long'><p>Truncates the <code>str</code> at <code>len - ellipsisChars.length</code>, and adds the <code>ellipsisChars</code> to the\nend of the string (by default, two periods: '..'). If the <code>str</code> length does not exceed\n<code>len</code>, the string will be returned unchanged.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : String<div class='sub-desc'><p>The string to truncate and add an ellipsis to.</p>\n</div></li><li><span class='pre'>truncateLen</span> : Number<div class='sub-desc'><p>The length to truncate the string at.</p>\n</div></li><li><span class='pre'>ellipsisChars</span> : String (optional)<div class='sub-desc'><p>The ellipsis character(s) to add to the end of <code>str</code>\n  when truncated. Defaults to '...'</p>\n<p>Defaults to: <code>...</code></p></div></li></ul></div></div></div><div id='method-emitTagAndPreviousTextNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/parse-html.html#global-method-emitTagAndPreviousTextNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-emitTagAndPreviousTextNode' class='name expandable'>emitTagAndPreviousTextNode</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Once we've decided to emit an open tag, that means we can also emit the\ntext node before it. ...</div><div class='long'><p>Once we've decided to emit an open tag, that means we can also emit the\ntext node before it.</p>\n</div></div></div><div id='method-getDomainNameStr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/regex-lib.html#global-method-getDomainNameStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-getDomainNameStr' class='name expandable'>getDomainNameStr</a>( <span class='pre'>group</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>A function to match domain names of a URL or email address. ...</div><div class='long'><p>A function to match domain names of a URL or email address.\nEx: 'google', 'yahoo', 'some-other-company', etc.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>group</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-indexOf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/utils.html#global-method-indexOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-indexOf' class='name expandable'>indexOf</a>( <span class='pre'>arr, element</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Supports Array.prototype.indexOf() functionality for old IE (IE8 and below). ...</div><div class='long'><p>Supports <code>Array.prototype.indexOf()</code> functionality for old IE (IE8 and below).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arr</span> : Array<div class='sub-desc'><p>The array to find an element of.</p>\n</div></li><li><span class='pre'>element</span> : *<div class='sub-desc'><p>The element to find in the array, and return the index of.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The index of the <code>element</code>, or -1 if it was not found.</p>\n</div></li></ul></div></div></div><div id='method-parseHtml' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/parse-html.html#global-method-parseHtml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-parseHtml' class='name expandable'>parseHtml</a>( <span class='pre'>html, callbacks</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Parses an HTML string, calling the callbacks to notify of tags and text. ...</div><div class='long'><p>Parses an HTML string, calling the callbacks to notify of tags and text.</p>\n\n<h2>History</h2>\n\n<p>This file previously used a regular expression to find html tags in the input\ntext. Unfortunately, we ran into a bunch of catastrophic backtracking issues\nwith certain input text, causing Autolinker to either hang or just take a\nreally long time to parse the string.</p>\n\n<p>The current code is intended to be a O(n) algorithm that walks through\nthe string in one pass, and tries to be as cheap as possible. We don't need\nto implement the full HTML spec, but rather simply determine where the string\nlooks like an HTML tag, and where it looks like text (so that we can autolink\nthat).</p>\n\n<p>This state machine parser is intended just to be a simple but performant\nparser of HTML for the subset of requirements we have. We simply need to:</p>\n\n<ol>\n<li>Determine where HTML tags are</li>\n<li>Determine the tag name (Autolinker specifically only cares about <a>,\n<script>, and <style> tags, so as not to link any text within them)</style></script></a></li>\n</ol>\n\n\n<p>We don't need to:</p>\n\n<ol>\n<li>Create a parse tree</li>\n<li>Auto-close tags with invalid markup</li>\n<li>etc.</li>\n</ol>\n\n\n<p>The other intention behind this is that we didn't want to add external\ndependencies on the Autolinker utility which would increase its size. For\ninstance, adding htmlparser2 adds 125kb to the minified output file,\nincreasing its final size from 47kb to 172kb (at the time of writing). It\nalso doesn't work exactly correctly, treating the string \"&lt;3 blah blah blah\"\nas an HTML tag.</p>\n\n<p>Reference for HTML spec:</p>\n\n<pre><code>https://www.w3.org/TR/html51/syntax.html#sec-tokenization\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>html</span> : String<div class='sub-desc'><p>The HTML to parse</p>\n</div></li><li><span class='pre'>callbacks</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>onOpenTag</span> : Function<div class='sub-desc'><p>Callback function to call when an open\n  tag is parsed. Called with the tagName as its argument.</p>\n</div></li><li><span class='pre'>onCloseTag</span> : Function<div class='sub-desc'><p>Callback function to call when a close\n  tag is parsed. Called with the tagName as its argument. If a self-closing\n  tag is found, <code>onCloseTag</code> is called immediately after <code>onOpenTag</code>.</p>\n</div></li><li><span class='pre'>onText</span> : Function<div class='sub-desc'><p>Callback function to call when text (i.e\n  not an HTML tag) is parsed. Called with the text (string) as its first\n  argument, and offset (number) into the string as its second.</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-reconsumeCurrentCharacter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/parse-html.html#global-method-reconsumeCurrentCharacter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-reconsumeCurrentCharacter' class='name expandable'>reconsumeCurrentCharacter</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Causes the main loop to re-consume the current character, such as after\nencountering a \"parse error\" that changed sta...</div><div class='long'><p>Causes the main loop to re-consume the current character, such as after\nencountering a \"parse error\" that changed state and needs to reconsume\nthe same character in that new state.</p>\n</div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/utils.html#global-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-remove' class='name expandable'>remove</a>( <span class='pre'>arr, fn</span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes array elements based on a filtering function. ...</div><div class='long'><p>Removes array elements based on a filtering function. Mutates the input\narray.</p>\n\n<p>Using this instead of the ES5 Array.prototype.filter() function, to allow\nAutolinker compatibility with IE8, and also to prevent creating many new\narrays in memory for filtering.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arr</span> : Array<div class='sub-desc'><p>The array to remove elements from. This array is\n  mutated.</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>A function which should return <code>true</code> to\n  remove an element.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>The mutated input <code>arr</code>.</p>\n</div></li></ul></div></div></div><div id='method-resetToDataState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/parse-html.html#global-method-resetToDataState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-resetToDataState' class='name expandable'>resetToDataState</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Resets the state back to the Data state, and removes the current tag. ...</div><div class='long'><p>Resets the state back to the Data state, and removes the current tag.</p>\n\n<p>We'll generally run this function whenever a \"parse error\" is\nencountered, where the current tag that is being read no longer looks\nlike a real HTML tag.</p>\n</div></div></div><div id='method-splitAndCapture' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/utils.html#global-method-splitAndCapture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-splitAndCapture' class='name expandable'>splitAndCapture</a>( <span class='pre'>str, splitRegex</span> ) : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Performs the functionality of what modern browsers do when String.prototype.split() is called\nwith a regular expressi...</div><div class='long'><p>Performs the functionality of what modern browsers do when <code>String.prototype.split()</code> is called\nwith a regular expression that contains capturing parenthesis.</p>\n\n<p>For example:</p>\n\n<pre><code>// Modern browsers:\n\"a,b,c\".split( /(,)/ );  // --&gt; [ 'a', ',', 'b', ',', 'c' ]\n\n// Old IE (including IE8):\n\"a,b,c\".split( /(,)/ );  // --&gt; [ 'a', 'b', 'c' ]\n</code></pre>\n\n<p>This method emulates the functionality of modern browsers for the old IE case.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : String<div class='sub-desc'><p>The string to split.</p>\n</div></li><li><span class='pre'>splitRegex</span> : RegExp<div class='sub-desc'><p>The regular expression to split the input <code>str</code> on. The splitting\n  character(s) will be spliced into the array, as in the \"modern browsers\" example in the\n  description of this method.\n  Note #1: the supplied regular expression <strong>must</strong> have the 'g' flag specified.\n  Note #2: for simplicity's sake, the regular expression does not need\n  to contain capturing parenthesis - it will be assumed that any match has them.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'><p>The split array of strings, with the splitting character(s) included.</p>\n</div></li></ul></div></div></div><div id='method-startNewTag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/parse-html.html#global-method-startNewTag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-startNewTag' class='name expandable'>startNewTag</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Starts a new HTML tag at the current index, ignoring any previous HTML\ntag that was being read. ...</div><div class='long'><p>Starts a new HTML tag at the current index, ignoring any previous HTML\ntag that was being read.</p>\n\n<p>We'll generally run this function whenever we read a new '&lt;' character,\nincluding when we read a '&lt;' character inside of an HTML tag that we were\npreviously reading.</p>\n</div></div></div><div id='method-stateDoctype' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/parse-html.html#global-method-stateDoctype' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-stateDoctype' class='name expandable'>stateDoctype</a>( <span class='pre'>char</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>For DOCTYPES in particular, we don't care about the attributes. ...</div><div class='long'><p>For DOCTYPES in particular, we don't care about the attributes. Just\nadvance to the '>' character and emit the tag, unless we find a '&lt;'\ncharacter in which case we'll start a new tag.</p>\n\n<p>Example doctype tag:\n   &lt;!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\"></p>\n\n<p>Actual spec: https://www.w3.org/TR/html51/syntax.html#doctype-state</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>char</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-throwUnhandledStateError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/parse-html.html#global-method-throwUnhandledStateError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-throwUnhandledStateError' class='name expandable'>throwUnhandledStateError</a>( <span class='pre'>state</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Function that should never be called but is used to check that every\nenum value is handled using TypeScript's 'never'...</div><div class='long'><p>Function that should never be called but is used to check that every\nenum value is handled using TypeScript's 'never' type.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>state</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-truncateEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/truncate-end.html#global-method-truncateEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-truncateEnd' class='name expandable'>truncateEnd</a>( <span class='pre'>anchorText, truncateLen, ellipsisChars</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A truncation feature where the ellipsis will be placed at the end of the URL. ...</div><div class='long'><p>A truncation feature where the ellipsis will be placed at the end of the URL.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anchorText</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>truncateLen</span> : Number<div class='sub-desc'><p>The maximum length of the truncated output URL string.</p>\n</div></li><li><span class='pre'>ellipsisChars</span> : String<div class='sub-desc'><p>The characters to place within the url, e.g. \"..\".</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The truncated URL.</p>\n</div></li></ul></div></div></div><div id='method-truncateMiddle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/truncate-middle.html#global-method-truncateMiddle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-truncateMiddle' class='name expandable'>truncateMiddle</a>( <span class='pre'>url, truncateLen, ellipsisChars</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Date: 2015-10-05\nAuthor: Kasper Søfren &#x73;&#x6f;&#x65;&#102;&#x72;&#105;&#116;&#x7a;&#64;&#x67;&#109;&#x61;&#x69;&...</div><div class='long'><p>Date: 2015-10-05\nAuthor: Kasper Søfren <a href=\"&#109;&#97;&#105;&#108;&#x74;&#111;&#58;&#x73;&#x6f;&#101;&#x66;&#114;&#x69;&#116;&#122;&#64;&#103;&#x6d;&#x61;&#x69;&#x6c;&#46;&#x63;&#x6f;&#109;\">&#x73;&#x6f;&#x65;&#102;&#x72;&#105;&#116;&#x7a;&#64;&#x67;&#109;&#x61;&#x69;&#x6c;&#46;&#99;&#x6f;&#109;</a> (https://github.com/kafoso)</p>\n\n<p>A truncation feature, where the ellipsis will be placed in the dead-center of the URL.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>A URL.</p>\n</div></li><li><span class='pre'>truncateLen</span> : Number<div class='sub-desc'><p>The maximum length of the truncated output URL string.</p>\n</div></li><li><span class='pre'>ellipsisChars</span> : String<div class='sub-desc'><p>The characters to place within the url, e.g. \"..\".</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The truncated URL.</p>\n</div></li></ul></div></div></div><div id='method-truncateSmart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/truncate-smart.html#global-method-truncateSmart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-truncateSmart' class='name expandable'>truncateSmart</a>( <span class='pre'>url, truncateLen, ellipsisChars</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Date: 2015-10-05\nAuthor: Kasper Søfren &#x73;&#x6f;&#x65;&#x66;&#114;&#x69;&#116;&#x7a;&#64;&#103;&#x6d;&#x61;&#x69;&...</div><div class='long'><p>Date: 2015-10-05\nAuthor: Kasper Søfren <a href=\"&#x6d;&#x61;&#105;&#108;&#116;&#x6f;&#x3a;&#x73;&#111;&#x65;&#102;&#114;&#105;&#116;&#x7a;&#x40;&#103;&#109;&#97;&#105;&#x6c;&#46;&#x63;&#x6f;&#x6d;\">&#x73;&#x6f;&#x65;&#x66;&#114;&#x69;&#116;&#x7a;&#64;&#103;&#x6d;&#x61;&#x69;&#108;&#46;&#x63;&#x6f;&#109;</a> (https://github.com/kafoso)</p>\n\n<p>A truncation feature, where the ellipsis will be placed at a section within\nthe URL making it still somewhat human readable.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>A URL.</p>\n</div></li><li><span class='pre'>truncateLen</span> : Number<div class='sub-desc'><p>The maximum length of the truncated output URL string.</p>\n</div></li><li><span class='pre'>ellipsisChars</span> : String<div class='sub-desc'><p>The characters to place within the url, e.g. \"...\".</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The truncated URL.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});