import React from 'react';
import { Box, Header, ColumnLayout } from '@cloudscape-design/components';

function Experience() {
  return (
    <div id="section-resume">
      <Box padding="l">
        <Header variant="h2">Working <strong>Experience</strong></Header>
        <ColumnLayout columns={2}>
          <div>
            <Box>
              <Header variant="h3">Perceptive Analytics</Header>
              <p>Software Engineer</p>
              <p>May 2023 – Jun 2024</p>
              <ul>
                <li>Worked with a client’s internal Risk team on providing explanations of actions (based on specified rules) taken by the platform on users such as banning them.</li>
                <li>Populated a Hive table with contributing features which triggered the actions to be taken with a cronjob. Performed a progressive backwards search on these (action, feature) pairings to identify root causes with the help of an API call.</li>
                <li>Leveraged AWS S3 for scalable data storage, and Apache Airflow to automate and schedule data collection workflows, resulting in a 35% improvement in data coverage of financial reports scraped from SEC and Bloomberg terminal.</li>
                <li>Developed a semantic retrieval system using OpenAI embeddings leveraging Elasticsearch for scalable xxing and retrieval, reducing query latency and improving search extraction speed by 90%.</li>
                <li>Containerised the Retrieval Augmented Generation(RAG) model using Docker and Amazon ECR and deployed as a serverless function in AWS Lambda.</li>
              </ul>
            </Box>
            <Box>
              <Header variant="h3">Lakehead University, Canada</Header>
              <p>MITACS Research Fellow</p>
              <p>May 2022 - August 2022</p>
              <ul>
                <li>Selected for a fully funded onsite Research internship through the prestigious Globalink MITACS research internship program.</li>
                <li>Developed a knowledge-grounded counter-narrative generation pipeline for online hate speech, leveraging large-scale pre-trained language models GPT-2 and XNLG for generating contextually relevant and informative responses.</li>
                <li>Engineered a multi-stage knowledge retrieval and generation system utilizing transformer-based keyphrase extraction and BM25-based retrieval, integrating structured and unstructured external knowledge into counter-narratives.</li>
              </ul>
            </Box>
            <Box>
              <Header variant="h3">Aided</Header>
              <p>Software Development Intern (part-time)</p>
              <p>January 2021 – April 2021</p>
              <ul>
                <li>Developed a multi-user, MERN stack healthcare application serving special needs children, parents, and therapists, featuring a synchronized scheduling and emailing system.</li>
                <li>Utilized Docker for web app integration and deployed it via the NGINX local server.</li>
              </ul>
            </Box>
          </div>
          <div>
            <Box>
              <Header variant="h3">Subtl.ai</Header>
              <p>Software Developer (part-time)</p>
              <p>Jan 2023 - Mar 2023</p>
              <ul>
                <li>Implemented a transformers based equivariance learning framework into a table-to-text generation CI-CD pipeline for ingesting tabular data.</li>
                <li>Utilized RoBERTa, and T5 to enhance text retrieval and generation accuracy, resulting in a 26% increase in BLEU score on proprietary user data. New functionality included QnA over large Excel sheets and embdedded PDF tables.</li>
                <li>I led the deployment of the RAG Tool at State Bank of India with 10000+ documents uploaded every month.</li>
              </ul>
            </Box>
            <Box>
              <Header variant="h3">Precog-IIITH</Header>
              <p>Ungraduate Research Assistant</p>
              <p>Jan 2022 - April 2023</p>
              <ul>
                <li>Formalised and developed a novel noise-reduction framework using sentence-transformer LLMs. Buit a rumour-detection model ensembling LSTM and CNN models on top for improved detection of rumours from twitter. Paper under review at Expert Systems with Applications Journal.</li>
                <li>Developed an MLP regressor model using m-BERT embeddings to evaluate the quality of synthetic machine-generated code-mixed sentences. Paper accepted at INLG 2022.</li>
                <li>Built NER models for hashtag segmentation, scraped and processed 3.3M hashtags from Twitter using a loosely supervised approach. Paper accepted at LREC22.</li>
              </ul>
            </Box>
            <Box>
              <Header variant="h3">Indian School of Business</Header>
              <p>Data Science Intern</p>
              <p>Jan 2022 - April 2022</p>
              <ul>
                <li>Developed an LSTM-based Seq-to-Seq activity forecasting system using Scikit-learn, PyTorch, on Netease Music users, processing over 56 million records from more than a million users. Achieved 79% accuracy.</li>
                <li>Leveraged distributed computing with Apache Spark for scalable data preprocessing and implemented sliding window and seasonal decomposition techniques to enhance temporal pattern accuracy</li>
              </ul>
            </Box>
          </div>
        </ColumnLayout>
      </Box>
    </div>
  );
}

export default Experience;
