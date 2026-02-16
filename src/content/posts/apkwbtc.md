---
title: apk文本弹窗
published: 2026-02-16
pinned: true
description: 教程
tags: [教程,android]
category: 教程
licenseName: ""

---

```
const/4 v9, 0x1
const-string v8, "\u4f60\u597d"  # "你好"
invoke-static {p0, v8, v9}, Landroid/widget/Toast;->makeText(Landroid/content/Context;Ljava/lang/CharSequence;I)Landroid/widget/Toast;
move-result-object v9
invoke-virtual {v9}, Landroid/widget/Toast;->show()V

# 恢复寄存器
const/4 v9, 0x0
const/4 v8, 0x0
```