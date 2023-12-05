const sidebarPlaceholder = document.getElementById('sidebar-wr');
const sidebar_html=`
		<div id="sidebar">
			<div class="inner">

				<!-- Menu -->
					<nav id="menu">
						<header class="major">
							<h2>Menu</h2>
						</header>
						<ul>
							<li><a href="index.html">Homepage</a></li>
							<!-- <li><a href="generic.html">Generic</a></li> -->
							<li>
								<span class="opener">Data Science Projects</span>
								<ul>
									<li><a href="projects_DS_gads_looker.html">Google Ads Dashboard in Looker Studio</a></li>
									<li><a href="projects_DS_KW_Clustering.html">Keyword Clustering</a></li>
									<li><a href="projects_DS_hf_movie_genre.html">Hugging Face Competition: Movie Genre Prediction</a></li>
								</ul>
							</li>
							<li>
								<span class="opener">Game Development Projects</span>
								<ul>
									<li><a href="projects_GD_Unity_minimap.html">Unity Minimap</a></li>
								</ul>
							</li>
						</ul>
					</nav>

				<!-- Section -->
					<section>
						<header class="major">
							<h2>Get in touch</h2>
						</header>
						<p>Feel free to reach out!</p>
						<ul class="contact">
							<li class="icon solid fa-envelope"><a href="mailto:zayed.upal@gmail.com">zayed.upal@gmail.com</a></li>
							<li class="icon brands fa-linkedin"><a href="https://www.linkedin.com/in/zayed-upal/">zayed-upal</a></li>
							<li class="icon brands fa-github"><a href="https://github.com/zayedupal">zayedupal</a></li>
							<li class="icon brands fa-stack-overflow"><a href="https://stackoverflow.com/users/1151716/zayedupal">zayedupal</a></li>						
						</ul>
					</section>

				<!-- Footer -->
					<footer id="footer">
						<p class="copyright">&copy; 2023 Zayed Uddin Chowdhury</p>
					</footer>

			</div>
		</div>`

const headerIconPlaceholder = document.getElementById('header-icons');
const header_icon_html=`<ul class="icons">
<li><a href="mailto:zayed.upal@gmail.com" class="icon solid fa-envelope"><span class="label">Gmail</span></a></li>
<li><a href="https://www.linkedin.com/in/zayed-upal/" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
<li><a href="https://github.com/zayedupal" class="icon brands fa-github"><span class="label">Github</span></a></li>
<li><a href="https://stackoverflow.com/users/1151716/zayedupal" class="icon brands fa-stack-overflow"><span class="label">Github</span></a></li>
</ul>`
const fetchReusableContent = async () => {
  sidebarPlaceholder.innerHTML = sidebar_html;
  headerIconPlaceholder.innerHTML = header_icon_html;
};

fetchReusableContent();