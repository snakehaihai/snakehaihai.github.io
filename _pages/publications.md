---
layout: page
permalink: /publications/
title: Publications
description: Publications grouped by conference and ordered by conference or journal publication date, newest first.
nav: true
nav_order: 2
---

[Google Scholar](https://scholar.google.com/citations?user=XcV_sesAAAAJ&hl=en) · [DBLP](https://dblp.org/pid/133/3411.html)

\* denotes corresponding author; † denotes equal contribution where indicated in the publication.

## Manuscripts

<div class="publications">

{% bibliography --file under_review --group_by none %}

{% bibliography --file research_manuscripts --group_by none %}

</div>

## Publications and preprints

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% capture publication_list %}
{% bibliography --group_by none %}
{% endcapture %}
{{ publication_list | chronological_publications: site.data.publication_timeline }}

</div>
